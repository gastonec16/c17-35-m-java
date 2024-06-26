import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class WalletService {
    http = inject(HttpClient)

    getWallet() {
        const userId = localStorage.getItem('id')
        return this.http.get<any>(`${environment.apiBaseUrl}/api/wallet/user/${userId}`)
    }

    setCryptoQuantity(allWalletCoins: any[], walletCoins: any[]) {
        allWalletCoins.forEach((originalCoin) => {
            walletCoins.forEach((Coin) => {
                if (originalCoin.coin.shortName === Coin.cryptoName) {
                    originalCoin.quantity = Coin.quantity
                }
            })
        })
    }
}
