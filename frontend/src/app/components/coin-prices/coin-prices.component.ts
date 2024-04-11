import { Component } from '@angular/core'

@Component({
    selector: 'app-coin-prices',
    standalone: true,
    imports: [],
    templateUrl: './coin-prices.component.html',
    styleUrl: './coin-prices.component.scss'
})
export class CoinPricesComponent {
    coinList = [
        { id: 1, name: 'Cardano', shortName: 'ADA' },
        { id: 2, name: 'Basic Attention Token', shortName: 'BAT' },
        { id: 3, name: 'Bitcoin Cash', shortName: 'BCH' },
        { id: 4, name: 'Bitcoin', shortName: 'BTC' },
        { id: 5, name: 'Dai', shortName: 'DAI' },
        { id: 6, name: 'Dogecoin', shortName: 'DOGE' },
        { id: 7, name: 'Polkadot', shortName: 'DOT' },
        { id: 8, name: 'Ethereum', shortName: 'ETH' },
        { id: 9, name: 'ChainLink', shortName: 'LINK' },
        { id: 10, name: 'Litecoin', shortName: 'LTC' },
        { id: 11, name: 'Decentraland', shortName: 'MANA' },
        { id: 12, name: 'Polygon', shortName: 'MATIC' },
        { id: 13, name: 'SHIBA INU', shortName: 'SHIB' },
        { id: 14, name: 'Solana', shortName: 'SOL' },
        { id: 15, name: 'TRON', shortName: 'TRX' },
        { id: 16, name: 'USD Coin', shortName: 'USDC' },
        { id: 17, name: 'TetherUS', shortName: 'USDT' },
        { id: 18, name: 'Ripple', shortName: 'XRP' }
    ]
}
