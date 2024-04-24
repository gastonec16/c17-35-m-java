import { Component, inject } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { CryptoService } from './services/crypto.service'
import { UserService } from './services/user.service'
import { WalletService } from './services/wallet.service'
import { User } from './interfaces/user'
import { Wallet, WalletCoins } from './interfaces/wallet'
import Swal from 'sweetalert2'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    router = inject(Router)
    cryptoService = inject(CryptoService)
    userService = inject(UserService)
    walletService = inject(WalletService)

    user: User = {
        id: 0,
        name: '',
        lastName: '',
        email: '',
        token: ''
    }

    wallet: Wallet = {
        id: 0,
        ars: 0,
        usd: 0,
        coins: []
    }
    walletCoins = []

    ngOnInit() {
        let user = this.userService.getUserData()

        this.user.id = user.id
        this.user.email = user.email
        this.user.name = user.name
        this.user.lastName = user.lastName
    }

    obtainWallet() {
        if (this.user.id > 0) {
            this.walletService.getWallet().subscribe({
                next: (data) => {
                    this.wallet.id = data.id
                    localStorage.setItem('walletId', data.id)
                    this.wallet.ars = data.localMoney
                    this.wallet.usd = data.globalMoney
                    this.walletCoins = data.coins
                    this.walletService.setCryptoQuantity(this.allWalletCoins, this.walletCoins)
                },
                error: (err) => {
                    this.userService.logOut()
                    this.error(err, 'No se pudo obtener tu billetera')
                }
            })
        }
    }

    error(message: string, err?: any) {
        Swal.fire({
            title: 'Error',
            text: err && err.error && err.error.message ? err.error.message : message,
            icon: 'error',
            iconColor: 'var(--red)',
            confirmButtonText: 'Aceptar',
            customClass: { confirmButton: 'swal-button' }
        })
    }

    allWalletCoins: WalletCoins[] = [
        { coin: { id: 1, name: 'Aave', shortName: 'AAVE' }, quantity: 0 },
        { coin: { id: 2, name: 'Cardano', shortName: 'ADA' }, quantity: 0 },
        { coin: { id: 3, name: 'Algorand', shortName: 'ALGO' }, quantity: 0 },
        { coin: { id: 4, name: 'Avalanche', shortName: 'AVAX' }, quantity: 0 },
        { coin: { id: 5, name: 'Axie Infinity', shortName: 'AXS' }, quantity: 0 },
        { coin: { id: 6, name: 'BNB', shortName: 'BNB' }, quantity: 0 },
        { coin: { id: 7, name: 'Bitcoin', shortName: 'BTC' }, quantity: 0 },
        { coin: { id: 8, name: 'Dai', shortName: 'DAI' }, quantity: 0 },
        { coin: { id: 9, name: 'Polkadot', shortName: 'DOT' }, quantity: 0 },
        { coin: { id: 10, name: 'Ethereum', shortName: 'ETH' }, quantity: 0 },
        { coin: { id: 11, name: 'Fantom', shortName: 'FTM' }, quantity: 0 },
        { coin: { id: 12, name: 'Litecoin', shortName: 'LTC' }, quantity: 0 },
        { coin: { id: 13, name: 'Decentraland', shortName: 'MANA' }, quantity: 0 },
        { coin: { id: 14, name: 'Polygon', shortName: 'MATIC' }, quantity: 0 },
        { coin: { id: 15, name: 'PAX Gold', shortName: 'PAXG' }, quantity: 0 },
        { coin: { id: 16, name: 'The Sandbox', shortName: 'SAND' }, quantity: 0 },
        { coin: { id: 17, name: 'SLP', shortName: 'SLP' }, quantity: 0 },
        { coin: { id: 18, name: 'Solana', shortName: 'SOL' }, quantity: 0 },
        { coin: { id: 19, name: 'Uniswap', shortName: 'UNI' }, quantity: 0 },
        { coin: { id: 20, name: 'USD Coin', shortName: 'USDC' }, quantity: 0 },
        { coin: { id: 21, name: 'TetherUS', shortName: 'USDT' }, quantity: 0 },
        { coin: { id: 22, name: 'Stellar Lumens', shortName: 'XLM' }, quantity: 0 }
    ]

    coinList = [
        { coin: { id: 1, name: 'Aave', shortName: 'AAVE' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 2, name: 'Cardano', shortName: 'ADA' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 3, name: 'Algorand', shortName: 'ALGO' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 4, name: 'Avalanche', shortName: 'AVAX' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 5, name: 'Axie Infinity', shortName: 'AXS' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 6, name: 'BNB', shortName: 'BNB' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 7, name: 'Bitcoin', shortName: 'BTC' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 8, name: 'Dai', shortName: 'DAI' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 9, name: 'Polkadot', shortName: 'DOT' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 10, name: 'Ethereum', shortName: 'ETH' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 11, name: 'Fantom', shortName: 'FTM' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 12, name: 'Litecoin', shortName: 'LTC' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 13, name: 'Decentraland', shortName: 'MANA' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 14, name: 'Polygon', shortName: 'MATIC' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 15, name: 'PAX Gold', shortName: 'PAXG' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 16, name: 'The Sandbox', shortName: 'SAND' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 17, name: 'SLP', shortName: 'SLP' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 18, name: 'Solana', shortName: 'SOL' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 19, name: 'Uniswap', shortName: 'UNI' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 20, name: 'USD Coin', shortName: 'USDC' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 21, name: 'TetherUS', shortName: 'USDT' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 22, name: 'Stellar Lumens', shortName: 'XLM' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 }
    ]
    // AAVE , ADA , ALGO , AVAX , AXS , BNB , BTC , DAI , DOT , ETH , FTM , LTC ,
    // MANA , MATIC , PAXG , SAND , SLP , SOL , UNI , USDC , USDT , XLM
}
