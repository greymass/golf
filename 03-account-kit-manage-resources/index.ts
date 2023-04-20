// SDK exposes all you need
import { Chains } from '@[SOMETHING]kit'
import { Asset, RamBytes, Account, SigningRequest } from '@[SOMETHING]kit/account'

async function main() {
    // Loads account
    const account: Account = await Account.load("teamgreymass", Chains.EOS)

    // Buy ram
    const buyRamEsr: SigningRequest = account.resources.ram.buy(RamBytes.from(1000))

    // You could then pass it to Session Kit to sign and broadcast
    // session.handle(buyRamEsr)

    // Sell ram
    const sellRamEsr: SigningRequest = account.resources.ram.sell(RamBytes.from(1000))

    // Delegate bandwidth
    const delegatebwEsr: SigningRequest = account.resources.net.stake(Asset.from(1, "EOS"))

    // Undelegate bandwidth
    const undelegatebwEsr: SigningRequest = account.resources.net.unstake(Asset.from(1, "EOS"))

    // Delegate CPU
    const delegateCPUEsr: SigningRequest = account.resources.cpu.stake(Asset.from(1, "EOS"))

    // Undelegate CPU
    const undelegateCpuEsr: SigningRequest = account.resources.cpu.unstake(Asset.from(1, "EOS"))

    // Powerup
    const powerupEsr: SigningRequest = account.resources.powerup(Asset.from(1, "EOS"))

    // Rent rex
    const rentRexEsr: SigningRequest = account.resources.rex.rent(Asset.from(1, "EOS"))
}

main()
