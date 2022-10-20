// SDK exposes all you need
import { Account } from 'NEWSDKNAME'

async function main() {
    // Loads account
    const account = await Account.get("teamgreymass")


    // Load account resources
    const { cpu, net, ram } = await account.getResources()

    // Load account permissions
    const permissions = await account.getPermissions()
}

main()
