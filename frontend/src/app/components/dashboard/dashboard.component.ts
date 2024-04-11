import { Component, inject } from '@angular/core'
import { FooterComponent } from '../footer/footer.component'
import { Router, RouterModule } from '@angular/router'
import { CryptoService } from '../../services/crypto.service'
import { CryptoYaOutput } from '../../interfaces/crypto'
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
            { coin: { id: 1, name: 'Cardano', shortName: 'ADA' }, quantity: 0 },
            { coin: { id: 2, name: 'Basic Attention Token', shortName: 'BAT' }, quantity: 0 },
            { coin: { id: 3, name: 'Bitcoin Cash', shortName: 'BCH' }, quantity: 0 },
            { coin: { id: 4, name: 'Bitcoin', shortName: 'BTC' }, quantity: 0.26 },
            { coin: { id: 5, name: 'Dai', shortName: 'DAI' }, quantity: 0 },
            { coin: { id: 6, name: 'Dogecoin', shortName: 'DOGE' }, quantity: 666 },
            { coin: { id: 7, name: 'Polkadot', shortName: 'DOT' }, quantity: 0 },
            { coin: { id: 8, name: 'Ethereum', shortName: 'ETH' }, quantity: 0.65 },
            { coin: { id: 9, name: 'ChainLink', shortName: 'LINK' }, quantity: 0 },
            { coin: { id: 10, name: 'Litecoin', shortName: 'LTC' }, quantity: 0 },
            { coin: { id: 11, name: 'Decentraland', shortName: 'MANA' }, quantity: 0 },
            { coin: { id: 12, name: 'Polygon', shortName: 'MATIC' }, quantity: 0 },
            { coin: { id: 13, name: 'SHIBA INU', shortName: 'SHIB' }, quantity: 245 },
            { coin: { id: 14, name: 'Solana', shortName: 'SOL' }, quantity: 2.6 },
            { coin: { id: 15, name: 'TRON', shortName: 'TRX' }, quantity: 0 },
            { coin: { id: 16, name: 'USD Coin', shortName: 'USDC' }, quantity: 0 },
            { coin: { id: 17, name: 'TetherUS', shortName: 'USDT' }, quantity: 125 },
            { coin: { id: 18, name: 'Ripple', shortName: 'XRP' }, quantity: 3.6 }
        ],
        avatar: 0
    }

    logOut() {
        this.router.navigate(['/'])
    }

    crypto: CryptoYaOutput[] = []

    coinList = [
        { coin: { id: 1, name: '', shortName: 'AAVE' }, usd: 0, ars: 0 },
        { coin: { id: 2, name: 'Cardano', shortName: 'ADA' }, usd: 0, ars: 0 },
        { coin: { id: 3, name: '', shortName: 'ALGO' }, usd: 0, ars: 0 },
        { coin: { id: 4, name: '', shortName: 'AVAX' }, usd: 0, ars: 0 },
        { coin: { id: 5, name: '', shortName: 'AXS' }, usd: 0, ars: 0 },
        { coin: { id: 6, name: 'BNB', shortName: 'BNB' }, usd: 0, ars: 0 },
        { coin: { id: 7, name: 'Bitcoin', shortName: 'BTC' }, usd: 0, ars: 0 },
        { coin: { id: 8, name: 'Dai', shortName: 'DAI' }, usd: 0, ars: 0 },
        { coin: { id: 9, name: '', shortName: 'DOT' }, usd: 0, ars: 0 },
        { coin: { id: 10, name: 'Ethereum', shortName: 'ETH' }, usd: 0, ars: 0 },
        { coin: { id: 11, name: '', shortName: 'FTM' }, usd: 0, ars: 0 },
        { coin: { id: 12, name: '', shortName: 'LTC' }, usd: 0, ars: 0 },
        { coin: { id: 13, name: '', shortName: 'MANA' }, usd: 0, ars: 0 },
        { coin: { id: 14, name: 'Polygon', shortName: 'MATIC' }, usd: 0, ars: 0 },
        { coin: { id: 15, name: '', shortName: 'PAXG' }, usd: 0, ars: 0 },
        { coin: { id: 16, name: '', shortName: 'SAND' }, usd: 0, ars: 0 },
        { coin: { id: 17, name: 'SLP', shortName: 'SLP' }, usd: 0, ars: 0 },
        { coin: { id: 18, name: '', shortName: 'SOL' }, usd: 0, ars: 0 },
        { coin: { id: 19, name: '', shortName: 'UNI' }, usd: 0, ars: 0 },
        { coin: { id: 20, name: '', shortName: 'USDC' }, usd: 0, ars: 0 },
        { coin: { id: 21, name: 'TetherUS', shortName: 'USDT' }, usd: 0, ars: 0 },
        { coin: { id: 22, name: '', shortName: 'XLM' }, usd: 0, ars: 0 }
    ]
    // AAVE , ADA , ALGO , AVAX , AXS , BNB , BTC , DAI , DOT , ETH , FTM , LTC ,
    // MANA , MATIC , PAXG , SAND , SLP , SOL , UNI , USDC , USDT , XLM

    refresh() {
        this.getUsdtUsdPrice()
        this.getCryptoPrices()
    }

    usdArsPrice = 0

    async getUsdtUsdPrice() {
        let ask = 1
        this.cryptoService.getUsdtPrice().subscribe((data) => {
            if (data.ask) {
                ask = data.ask
            }
        })
        return ask
    }

    async getCryptoPrices() {
        const usdtUsdPrice: any = await this.getUsdtUsdPrice()

        await this.cryptoService.getCryptoPrices('usdt', 'ars').subscribe({
            next: (data) => {
                this.usdArsPrice = usdtUsdPrice * data.ask
            }
        })

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
}
