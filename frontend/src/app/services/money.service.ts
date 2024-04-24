import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { DepositMoney, WithdrawMoney } from '../interfaces/money'

@Injectable({
    providedIn: 'root'
})
export class MoneyService {
    http = inject(HttpClient)

    deposit(money: DepositMoney) {
        const walletId = localStorage.getItem('walletId')
        return this.http.post<any>(`${environment.apiBaseUrl}/api/wallet/${walletId}/deposit`, money)
    }

    withdraw(money: WithdrawMoney) {
        const walletId = localStorage.getItem('walletId')
        return this.http.post<any>(`${environment.apiBaseUrl}/api/wallet/${walletId}/withdraw`, money)
    }
}
