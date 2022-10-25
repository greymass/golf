// SDK exposes all you need
import { Chains, PublicKey, Permission } from '@[SOMETHING]kit'
import { Account } from '@[SOMETHING]kit/account'
import { Session } from '@[SOMETHING]kit/session'


async function main() {
    const session = Session.login();
    const account: Account = await session.getAccount();

    // or
    // const account: Account = await Account.load("teamgreymass", Chains.EOS)

    // Manage account Permissions

    // Get a permission
    const permission: Permission = account.getPermission("active")

    // Get its public keys
    const publicKeys: PublicKey[] = permission.keys

    // Get its accounts
    const accounts: Account[] = permission.accounts

    // Add a new permission
    await account.addPermission({
        session, // optional, if not defined the active session which is globally stored will be used
        permission: Permission.from({
            permission: 'active',
            parent: 'owner',
            waits: [{ wait_sec: 10, weight: 1 }],
            keys: [PublicKey.from('PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY')]
        }),
    });

    // Update a permission
    await permission.update(Permission.from({
        session, // optional, if not defined the active session which is globally stored will be used
        permission: 'owner',
        keys: [PublicKey.from('PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY')]
    }));

    // Remove a permission
    await permission.remove()

    // Add a key to a permission
    await permission.addKey({ key: PublicKey.from('PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY'), weight: 1 })

    // Remove a key from a permission
    await permission.removeKey(PublicKey.from('PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY'))

    // Add an account to a permission
    await permission.addAccount(Account.from('teamgreymass'))

    // Remove an account from a permission
    await permission.removeAccount(Account.from('teamgreymass'))

    // Add a wait to a permission
    await permission.addWait({ wait_sec: 10, weight: 1 })

    // Remove a wait from a permission
    await permission.removeWait({ wait_sec: 10, weight: 1 })
}

main()
