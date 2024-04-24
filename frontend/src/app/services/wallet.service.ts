import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from '../../environments/environment'
import { DepositMoney, WithdrawMoney } from '../interfaces/wallet'

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

    deposit(money: DepositMoney) {
        const walletId = localStorage.getItem('walletId')
        return this.http.post<any>(`${environment.apiBaseUrl}/api/wallet/${walletId}/deposit`, money)
    }

    withdraw(money: WithdrawMoney) {
        const walletId = localStorage.getItem('walletId')
        return this.http.post<any>(`${environment.apiBaseUrl}/api/wallet/${walletId}/withdraw`, money)
    }
}
