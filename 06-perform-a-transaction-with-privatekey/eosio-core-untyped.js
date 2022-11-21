/*
 * Required dependencies
 */

import fetch from 'node-fetch'
import {
    Action,
    APIClient,
    FetchProvider,
    PrivateKey,
    SignedTransaction,
    Transaction,
} from '@greymass/eosio'

/*
 * Common configuration values between implementations
 */

const apiServer = 'https://jungle3.greymass.com'
const actor = 'corecorecore'
const permission = 'refund'
const privateKey = '5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr'
const action = {
    account: 'eosio',
    name: 'refund',
    authorization: [
        {
            actor,
            permission,
        },
    ],
    data: {
        owner: actor,
    },
}

/*
 * SDK specific implementation
 */

export const provider = new FetchProvider(apiServer, { fetch })
export const client = new APIClient({ provider })

async function run() {
    const { abi } = await client.v1.chain.get_abi(action.account)
    const info = await client.v1.chain.get_info()
    const transaction = Transaction.from({
        ...info.getTransactionHeader(120),
        actions: [Action.from(action, abi)],
    })
    const key = PrivateKey.from(privateKey)
    const signature = key.signDigest(transaction.signingDigest(info.chain_id))
    const signedTransaction = SignedTransaction.from({
        ...transaction,
        signatures: [signature],
    })
    client.v1.chain.push_transaction(signedTransaction)
}

await run()
