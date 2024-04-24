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

    getWallet() {
        const userId = localStorage.getItem('id')
        return this.http.get<any>(`${environment.apiBaseUrl}/api/wallet/user/${userId}`)
    }

    // getWalletCoins() {
    //     const userId = localStorage.getItem('id')
    //     return this.http.get<any[]>(`${environment.apiBaseUrl}/api/wallet/user/${userId}`).pipe(
    //         map((responseData) => {
    //             console.log('response data', responseData)

    //             // Itera sobre la lista original
    //             this.walletCoins.forEach((item, index) => {
    //                 // Busca el elemento correspondiente en la respuesta
    //                 const matchingItem = responseData.find(
    //                     (responseItem) => responseItem.coins.cryptoName === item.coin.shortName
    //                 )
    //                 // Si se encuentra el elemento en la respuesta, actualiza la cantidad
    //                 if (matchingItem) {
    //                     this.walletCoins[index].quantity = matchingItem.quantity
    //                 }
    //             })
    //             return this.walletCoins
    //         })
    //     )
    // }

    // actualizarCantidades(listaOriginal: any[], listaActualizada: any[]) {
    //     listaOriginal.forEach((originalItem) => {
    //         const match = listaActualizada.find(
    //             (actualItem) => actualItem.coin.cryptoName === originalItem.coin.shortName
    //         )
    //         if (match) {
    //             originalItem.quantity = match.quantity
    //         }
    //     })
    // }

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
