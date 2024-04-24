import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators'
import { WalletCoins } from '../interfaces/wallet'

@Injectable({
    providedIn: 'root'
})
export class WalletService {
    http = inject(HttpClient)

    walletCoins: WalletCoins[] = [
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
        { coin: { id: 18, name: 'Solana', shortName: 'SOL' }, quantity: 3 },
        { coin: { id: 19, name: 'Uniswap', shortName: 'UNI' }, quantity: 4 },
        { coin: { id: 20, name: 'USD Coin', shortName: 'USDC' }, quantity: 0 },
        { coin: { id: 21, name: 'TetherUS', shortName: 'USDT' }, quantity: 125 },
        { coin: { id: 22, name: 'Stellar Lumens', shortName: 'XLM' }, quantity: 0 }
    ]

    getWallet() {
        const userId = localStorage.getItem('id')
        return this.http.get<any>(`${environment.apiBaseUrl}/api/wallet/user/${userId}`)
    }

    getWalletCoins() {
        const userId = localStorage.getItem('id')
        return this.http.get<any[]>(`${environment.apiBaseUrl}/api/wallet/user/${userId}`).pipe(
            map((responseData) => {
                console.log('response data', responseData)

                // Itera sobre la lista original
                this.walletCoins.forEach((item, index) => {
                    // Busca el elemento correspondiente en la respuesta
                    const matchingItem = responseData.find(
                        (responseItem) => responseItem.coins.cryptoName === item.coin.shortName
                    )
                    // Si se encuentra el elemento en la respuesta, actualiza la cantidad
                    if (matchingItem) {
                        this.walletCoins[index].quantity = matchingItem.quantity
                    }
                })
                return this.walletCoins
            })
        )
    }
}
