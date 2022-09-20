import { SDK } from 'NEWSDKNAME'

// SDK exposes all you need like anchor-link does, users don't need to import from core directly, if they need something they do
// import { Asset } from 'NEWSDKNAME'

const sdk = new SDK({ url: 'https://eos.greymass.com' }) // loaded with default plugins (something like if (browser) { plugins = [anchor-browser, atomichub] })

async function main() {
    const session = await sdk.login('myapp') // login also restores existing session unlike anchor-link, can have option for forcing re-login

    // Loads contract by name
    const contract = await sdk.getContract('rewards.gm')

    // Work with table data
    const usersTable = contract.getTable('users')
    const rows = await usersTable.getByPrimary('teamgreymass')
    const amount = rows[0].getColumn('amount')

    // This could have a strongly typed interface as well
    // class MyRow extends Struct {
    //     @Struct.field('uint64') declare amount: UInt64
    // }
    // const usersTable = await contract.getTable('users', MyRow)
    // const row = await usersTable.getByPrimary('teamgreymass')
    // const amount = row.amount

    // Creates a claim action
    const action = contract.action(
        'claim',
        {
            account: 'teamgreymass',
            amount,
        },
        { authority: [session.auth] } // can be optional, set to to placeholder if omitted
    )

    // Transact
    await session.transact(action)
}

main()
