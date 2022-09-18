import { APIClient } from '@greymass/eosio'
import { Contract } from 'NEWSDKNAME'

const client = new APIClient({ url: 'https://eos.greymass.com' })

async function main() {
    // Loads contract by name
    // Question: How could something like this do the API call?
    //           Should we break this pattern for these kinds of calls?
    const contract = client.getContract('rewards.gm')

    // Creates a claim action
    const action = contract.action('claim', {
        account: 'teamgreymass',
    })

    // Create a transaction
    const transaction = Transaction.from({ actions: action })
}

main()
