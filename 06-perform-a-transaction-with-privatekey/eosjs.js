/*
 * Required dependencies
 */

import fetch from 'node-fetch'
import { Api, JsonRpc } from 'enf-eosjs'
import { JsSignatureProvider } from 'enf-eosjs/dist/eosjs-jssig.js'

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

const signatureProvider = new JsSignatureProvider([privateKey])

const rpc = new JsonRpc(apiServer, { fetch })
const api = new Api({
    rpc,
    signatureProvider,
})

async function run() {
    const result = await api.transact(
        {
            actions: [action],
        },
        {
            expireSeconds: 120,
            blocksBehind: 3,
        }
    )
    console.dir(result)
}

await run()
