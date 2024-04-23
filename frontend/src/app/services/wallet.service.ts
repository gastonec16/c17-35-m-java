import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from '../environment'

@Injectable({
    providedIn: 'root'
})
export class WalletService {
    http = inject(HttpClient)

    getWallet() {
        const userId = localStorage.getItem('id')
        return this.http.get<any>(`${environment.apiBaseUrl}/api/wallet/user/${userId}`)
    }
}
