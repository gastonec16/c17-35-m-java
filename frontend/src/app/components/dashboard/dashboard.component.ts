import { Component, inject } from '@angular/core'
import { FooterComponent } from '../footer/footer.component'
import { Router, RouterModule } from '@angular/router'
import { CryptoService } from '../../services/crypto.service'
import Swal from 'sweetalert2'

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [FooterComponent, RouterModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    router = inject(Router)
    cryptoService = inject(CryptoService)

    // TODO: obtener del backend
    user = {
        id: 34,
        name: 'David',
        lastName: 'Reyes',
        email: 'davidreyes@hotmail.com',
        ars: 95123,
        usd: 215,
        crypto: [
            { coin: { id: 2, name: 'Cardano', shortName: 'ADA' }, quantity: 0 },
            { coin: { id: 7, name: 'Bitcoin', shortName: 'BTC' }, quantity: 0.26 },
            { coin: { id: 8, name: 'Dai', shortName: 'DAI' }, quantity: 0 },
            { coin: { id: 9, name: 'Polkadot', shortName: 'DOT' }, quantity: 0.67 },
            { coin: { id: 10, name: 'Ethereum', shortName: 'ETH' }, quantity: 0.65 },
            { coin: { id: 12, name: 'Litecoin', shortName: 'LTC' }, quantity: 0 },
            { coin: { id: 13, name: 'Decentraland', shortName: 'MANA' }, quantity: 21 },
            { coin: { id: 14, name: 'Polygon', shortName: 'MATIC' }, quantity: 42.5 },
            { coin: { id: 18, name: 'Solana', shortName: 'SOL' }, quantity: 2.6 },
            { coin: { id: 20, name: 'USD Coin', shortName: 'USDC' }, quantity: 0 },
            { coin: { id: 21, name: 'TetherUS', shortName: 'USDT' }, quantity: 125 }
        ],
        avatar: 0
    }

    ngOnInit() {
        this.getCryptoPrices()
    }

    logOut() {
        this.router.navigate(['/'])
    }

    coinList = [
        { coin: { id: 1, name: 'Aave', shortName: 'AAVE' }, usd: 0, ars: 0 },
        { coin: { id: 2, name: 'Cardano', shortName: 'ADA' }, usd: 0, ars: 0 },
        { coin: { id: 3, name: 'Algorand', shortName: 'ALGO' }, usd: 0, ars: 0 },
        { coin: { id: 4, name: 'Avalanche', shortName: 'AVAX' }, usd: 0, ars: 0 },
        { coin: { id: 5, name: 'Axie Infinity', shortName: 'AXS' }, usd: 0, ars: 0 },
        { coin: { id: 6, name: 'BNB', shortName: 'BNB' }, usd: 0, ars: 0 },
        { coin: { id: 7, name: 'Bitcoin', shortName: 'BTC' }, usd: 0, ars: 0 },
        { coin: { id: 8, name: 'Dai', shortName: 'DAI' }, usd: 0, ars: 0 },
        { coin: { id: 9, name: 'Polkadot', shortName: 'DOT' }, usd: 0, ars: 0 },
        { coin: { id: 10, name: 'Ethereum', shortName: 'ETH' }, usd: 0, ars: 0 },
        { coin: { id: 11, name: 'Fantom', shortName: 'FTM' }, usd: 0, ars: 0 },
        { coin: { id: 12, name: 'Litecoin', shortName: 'LTC' }, usd: 0, ars: 0 },
        { coin: { id: 13, name: 'Decentraland', shortName: 'MANA' }, usd: 0, ars: 0 },
        { coin: { id: 14, name: 'Polygon', shortName: 'MATIC' }, usd: 0, ars: 0 },
        { coin: { id: 15, name: 'PAX Gold', shortName: 'PAXG' }, usd: 0, ars: 0 },
        { coin: { id: 16, name: 'The Sandbox', shortName: 'SAND' }, usd: 0, ars: 0 },
        { coin: { id: 17, name: 'SLP', shortName: 'SLP' }, usd: 0, ars: 0 },
        { coin: { id: 18, name: 'Solana', shortName: 'SOL' }, usd: 0, ars: 0 },
        { coin: { id: 19, name: 'Uniswap', shortName: 'UNI' }, usd: 0, ars: 0 },
        { coin: { id: 20, name: 'USD Coin', shortName: 'USDC' }, usd: 0, ars: 0 },
        { coin: { id: 21, name: 'TetherUS', shortName: 'USDT' }, usd: 0, ars: 0 },
        { coin: { id: 22, name: 'Stellar Lumens', shortName: 'XLM' }, usd: 0, ars: 0 }
    ]
    // AAVE , ADA , ALGO , AVAX , AXS , BNB , BTC , DAI , DOT , ETH , FTM , LTC ,
    // MANA , MATIC , PAXG , SAND , SLP , SOL , UNI , USDC , USDT , XLM

    refresh() {
        this.getCryptoPrices()
        Swal.fire({
            title: 'Éxito',
            text: 'Se ha actualizado la cotización de todas las criptomonedas',
            icon: 'success',
            customClass: {
                title: 'swalTitle',
                confirmButton: 'swalButton',
                popup: 'swalPopup'
            }
        })
    }

    usdArsPrice = 0

    getCryptoPrices() {
        let usdtUsdPrice = 1

        this.cryptoService.getUsdtPrice().subscribe({
            next: (data) => {
                if (data.ask) {
                    usdtUsdPrice = data.ask
                }

                this.cryptoService.getCryptoPrices('usdt', 'ars').subscribe({
                    next: (data) => {
                        this.usdArsPrice = usdtUsdPrice * data.ask

                        this.coinList.forEach((item) => {
                            this.cryptoService.getCryptoPrices(item.coin.shortName, 'ars').subscribe({
                                next: (data) => {
                                    if (data.ask) {
                                        this.coinList[item.coin.id - 1].ars = data['bid']
                                        this.coinList[item.coin.id - 1].usd = data['bid'] / this.usdArsPrice
                                    }
                                }
                            })
                        })
                    }
                })
            }
        })
    }
}
