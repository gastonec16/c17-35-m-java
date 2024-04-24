import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { BuyCrypto, SellCrypto } from '../interfaces/buy-sell'
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class BuySellService {
    http = inject(HttpClient)

    buyCrypto(buy: BuyCrypto) {
        const walletId = localStorage.getItem('walletId')
        return this.http.post<any>(`${environment.apiBaseUrl}/api/wallet/${walletId}/compra`, buy)
    }

    sellCrypto(sell: SellCrypto) {
        const walletId = localStorage.getItem('walletId')
        return this.http.post<any>(`${environment.apiBaseUrl}/api/wallet/${walletId}/venta`, sell)
    }
}
