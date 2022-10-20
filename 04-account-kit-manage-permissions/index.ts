// SDK exposes all you need
import { Chains, PublicKey, SigningRequest, Permission } from '@[SOMETHING]kit'
import { Account } from '@[SOMETHING]kit/account'

async function main() {
    // Loads account
    const account: Account = await Account.load("teamgreymass", Chains.EOS)

    // Manage account Permissions

    // Get a permission
    const permission: Permission = account.permissions.get("active")

    // Get its public keys
    const publicKeys: PublicKey[] = permission.keys

    // Get its accounts
    const accounts: Account[] = permission.accounts

    // Add a new permission
    const addPermissionEsr: SigningRequest = account.permissions.add('active', PublicKey.from('PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY'))

    // Update a new permission
    const updatePermissionEsr: SigningRequest = account.permissions.get('active').update(PublicKey.from('PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY'))

    // Remove a permission
    const removePermissionEsr: SigningRequest = account.permissions.get('active').remove()

    // Add a key to a permission
    const addKeyEsr: SigningRequest = permission.keys.add(PublicKey.from('PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY'))

    // Remove a key from a permission
    const removeKeyEsr: SigningRequest = permission.keys.remove(PublicKey.from('PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY'))

    // Add an account to a permission
    const addAccountEsr: SigningRequest = permission.accounts.add(Account.from('teamgreymass'))

    // Remove an account from a permission
    const removeAccountEsr: SigningRequest = permission.accounts.remove(Account.from('teamgreymass'))

    // Add a wait to a permission
    const addWaitEsr: SigningRequest = permission.wait.add(10)

    // Remove a wait from a permission
    const removeWaitEsr: SigningRequest = permission.wait.remove()
}

main()
