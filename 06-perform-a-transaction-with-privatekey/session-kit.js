/*
 * Required dependencies
 */

import { Session, WalletPluginPrivateKey } from '@[SOMETHING]kit/session'

/*
 * Common configuration values between implementations
 */

const apiServer = 'https://jungle3.greymass.com'
const actor = 'corecorecore'
const permission = 'refund'
const privateKey = '5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr'
const chainId =
    '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840'
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

const session = new Session({
    chain: {
        id: chainId,
        url: apiServer,
    },
    permissionLevel: `${actor}@${permission}`,
    walletPlugin: new WalletPluginPrivateKey({
        privateKey,
    }),
})

async function run() {
    const result = await session.transact({
        action,
    })
    console.dir(result)
}

await run()
