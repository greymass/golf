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
        permission: Permission.from({
            permission: 'active',
            parent: 'owner',
            waits: [{wait_sec: 10, weight: 1}],
            keys: ['PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY']
        }),
    },
    {
        session, // optional, if not defined the active session which is globally stored will be used
    });

    // Update a permission
    await account.updatePermission(Permission.from({
        session, // optional, if not defined the active session which is globally stored will be used
        permission: 'owner',
        keys: ['PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY']
    }));

    // Remove a permission
    await account.removePermission('owner')

    // Add a key to a permission
    await account.addPermissionKey('active', { key: 'PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY', weight: 1 })

    // Remove a key from a permission
    await account.removePermissionKey('active', 'PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY')

    // Add an account to a permission
    await account.addPermissionAccount('teamgreymass')

    // Remove an account from a permission
    await account.removePermissionAccount('teamgreymass')

    // Add a wait to a permission
    await account.addPermissionWait('active', { wait_sec: 10, weight: 1 })

    // Remove a wait from a permission
    await account.removeWait('active')
}

main()
