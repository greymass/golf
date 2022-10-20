// SDK exposes all you need
import { Account } from 'NEWSDKNAME'

async function main() {
    // Loads account
    const account = await Account.get("teamgreymass")

    // Loads account balance
    const balance = await account.getBalance('EOS')

    // Load account resources
    const { cpu, net, ram } = await account.getResources()

    // Load account permissions
    const permissions = await account.getPermissions()

    // Manage account Resources

    // Buy ram
    const buyRamEsr = await account.buyRam(1000)

    // You could then pass it to Session Kit to sign and broadcast
    // session.transact(buyRamEsr)

    // Sell ram
    const sellRamEsr = await account.sellRam(1000)

    // Delegate bandwidth
    const delegatebwEsr = await account.delegatebw(1000)

    // Undelegate bandwidth
    const undelegatebwEsr = await account.undelegatebw(1000)

    // Delegate CPU
    const delegateCPUEsr = await account.delegateCpu(1000)

    // Undelegate CPU
    const undelegateCpuesr = await account.undelegateCpu(1000)

    // Manage account Permissions

    // Add a new permission
    const addPermissionEsr = await account.addPermission('PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY', 'active')

    // Remove a permission
    const removePermissionEsr = await account.removePermission('PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqfHSWYY')

    // Update a permission
    const updatePermissionEsr = await account.updatePermission('PUB_K1_5rcqJ8eNgNXooYyz9PTX2a2zZBktWaWezhXYGN2hrXWqxxSWYY', 'active')
}

main()
