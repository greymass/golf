// SDK exposes all you need
import { Asset, Chains, Int64, UInt64 } from '@[SOMETHING]kit'
import { Account } from '@[SOMETHING]kit/account'

async function main() {
    // Loads account representation (optional 2nd parameter for chain, could use a default if not specified)
    const account: Account = Account.from('teamgreymass', Chains.EOS)

    // Retrieves data from the APIs (v1/chain/get_account)
    await account.loadData()

    // Load account resources
    const cpu: Int64 = account.resources.cpu
    const net: Int64 = account.resources.net
    const ram: UInt64 = account.resources.ram

    // Access an account permission
    const active: AccountPermission = account.permissions.active

    /*

    // Internal Data Structure
    const account: Account = new Account({
        // Data Fields
        account: Name,
        chain: ChainType,
        // Modules
        api: APIProvider,
        balances: BalanceProvider,
        resources: ResourceProvider,
        permissions: PermissionProvider,
        // Methods
        loadData = async () => { },
    })

    */
}

main()
