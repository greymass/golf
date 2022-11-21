import { Session, WalletPluginPrivateKey } from '@wharfkit/session'

// Instantiate a session to a blockchain account
const session = new Session({
    // Pass information about the blockchain and how to connect to it.
    chain: {
        id: '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840',
        url: 'https://jungle3.greymass.com',
    },
    // Optionally pass APIClient to override the one automatically created.
    // client: new APIClient({url: 'https://jungle3.greymass.com'}),
    // Pass the permission to use for this session.
    permissionLevel: 'someone@active',
    // Pass a Wallet Plugin that this session will interact with.
    walletPlugin: new WalletPluginPrivateKey({
        privateKey: '5JnUd2V5nYmRKgK9K2fRQcs3qKoi4mbcGV8Dg8EFqjjqEp9tYP5',
    }),
})

/*
    Payload accepted by the [[Session.transact]] method.

    export interface TransactArgs {
        transaction?: AnyTransaction
        action?: AnyAction
        actions?: AnyAction[]
        request?: SigningRequest | string
    }

    This allows accepting of core object typed as Action, Action[], or Transaction.
    It also accepts a plain JSON representation of these, as well as a full transaction (which contains `actions`).
    Finally, a SigningRequest object or string can be passed as `request`.
*/

// Perform a transaction
const result = await session.transact({
    action: {
        authorization: [
            {
                actor: 'someone',
                permission: 'active',
            },
        ],
        account: 'eosio.token',
        name: 'transfer',
        data: {
            from: 'someone',
            to: 'teamgreymass',
            quantity: '0.1337 EOS',
            memo: 'this is the best! <3',
        },
    },
})
