import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { AppComponent } from '../../app.component'
import { CryptoService } from '../../services/crypto.service'
import { UserService } from '../../services/user.service'
import { DashboardComponent } from '../dashboard/dashboard.component'

@Component({
    selector: 'app-account',
    standalone: true,
    imports: [],
    templateUrl: './account.component.html',
    styleUrl: './account.component.scss'
})
export class AccountComponent {
    appComponent = inject(AppComponent)
    dashboardComponent = inject(DashboardComponent)
    userService = inject(UserService)
    router = inject(Router)
    cryptoService = inject(CryptoService)
    isBuying = true

    user = {
        id: this.userService.getUserId(),
        name: this.appComponent.user.name,
        lastName: this.appComponent.user.lastName,
        email: this.appComponent.user.email,
        ars: 95123,
        usd: 215,
        crypto: [
            { coin: { id: 1, name: 'Aave', shortName: 'AAVE' }, quantity: 0 },
            { coin: { id: 2, name: 'Cardano', shortName: 'ADA' }, quantity: 0 },
            { coin: { id: 3, name: 'Algorand', shortName: 'ALGO' }, quantity: 0 },
            { coin: { id: 4, name: 'Avalanche', shortName: 'AVAX' }, quantity: 0 },
            { coin: { id: 5, name: 'Axie Infinity', shortName: 'AXS' }, quantity: 0 },
            { coin: { id: 6, name: 'BNB', shortName: 'BNB' }, quantity: 0 },
            { coin: { id: 7, name: 'Bitcoin', shortName: 'BTC' }, quantity: 0.26 },
            { coin: { id: 8, name: 'Dai', shortName: 'DAI' }, quantity: 0 },
            { coin: { id: 9, name: 'Polkadot', shortName: 'DOT' }, quantity: 0.67 },
            { coin: { id: 10, name: 'Ethereum', shortName: 'ETH' }, quantity: 0.65 },
            { coin: { id: 11, name: 'Fantom', shortName: 'FTM' }, quantity: 0 },
            { coin: { id: 12, name: 'Litecoin', shortName: 'LTC' }, quantity: 0 },
            { coin: { id: 13, name: 'Decentraland', shortName: 'MANA' }, quantity: 21 },
            { coin: { id: 14, name: 'Polygon', shortName: 'MATIC' }, quantity: 42.5 },
            { coin: { id: 15, name: 'PAX Gold', shortName: 'PAXG' }, quantity: 0 },
            { coin: { id: 16, name: 'The Sandbox', shortName: 'SAND' }, quantity: 0 },
            { coin: { id: 17, name: 'SLP', shortName: 'SLP' }, quantity: 0 },
            { coin: { id: 18, name: 'Solana', shortName: 'SOL' }, quantity: 2.6 },
            { coin: { id: 19, name: 'Uniswap', shortName: 'UNI' }, quantity: 0 },
            { coin: { id: 20, name: 'USD Coin', shortName: 'USDC' }, quantity: 0 },
            { coin: { id: 21, name: 'TetherUS', shortName: 'USDT' }, quantity: 125 },
            { coin: { id: 22, name: 'Stellar Lumens', shortName: 'XLM' }, quantity: 0 }
        ],
        avatar: 0
    }

    logOut() {
        this.userService.logOut()
    }

    coinList = this.dashboardComponent.coinList

    goToDeposit() {
        this.router.navigate(['/deposit'])
    }
    goToWithdraw() {
        this.router.navigate(['/withdraw'])
    }
}
