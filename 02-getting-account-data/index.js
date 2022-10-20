// SDK exposes all you need
import { Account } from 'NEWSDKNAME'

async function main() {
    // Loads account representation (optional 2nd parameter for chain, could use a default if not specified)
    const account: Account = Account.from('teamgreymass', Chains.EOS)

    // Retrieves data from the APIs (v1/chain/get_account)
    await account.loadData()

    // Load account resources
    const cpu: Int64 = account.resources.cpu
    const net: Int64 = account.resources.net
    const ram: UInt64 = account.resources.ram

    // Load account permissions
    const permissions = await account.getPermissions()
}

main()
