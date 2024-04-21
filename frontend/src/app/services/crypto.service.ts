import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})
export class CryptoService {
    http = inject(HttpClient)

    getCryptoPrice(crypto: string, fiat: string) {
        return this.http.get<any>(`https://criptoya.com/api/lemoncash/${crypto}/${fiat}`)
    }

    getUsdtPrice() {
        return this.http.get<any>(`https://criptoya.com/api/binancep2p/usdt/usd`)
    }

    getCryptoPrices(coinList: any[]) {
        let usdtUsdPrice = 1
        let usdArsPrice = 1

        this.getUsdtPrice().subscribe({
            next: (data) => {
                if (data.ask) {
                    usdtUsdPrice = data.ask
                }

                this.getCryptoPrice('usdt', 'ars').subscribe({
                    next: (data) => {
                        usdArsPrice = usdtUsdPrice * data.ask

                        coinList.forEach((item) => {
                            this.getCryptoPrice(item.coin.shortName, 'ars').subscribe({
                                next: (data) => {
                                    coinList[item.coin.id - 1].arsSell = data['bid']
                                    coinList[item.coin.id - 1].usdSell = data['bid'] / usdArsPrice

                                    coinList[item.coin.id - 1].arsBuy = data['ask']
                                    coinList[item.coin.id - 1].usdBuy = data['ask'] / usdArsPrice
                                }
                            })
                        })
                    },
                    error: (err) => {
                        Swal.fire({
                            title: 'Error',
                            text: 'No se pudo obtener el precio de las criptomonedas',
                            icon: 'error',
                            iconColor: 'var(--red)',
                            confirmButtonText: 'Aceptar',
                            customClass: { confirmButton: 'swal-button' }
                        })
                    }
                })
            }
        })
        return coinList
    }
}

// Endpoint: /api/lemoncash/{coin}/{fiat}

// coin: AAVE , ADA , ALGO , AVAX , AXS , BNB , BTC , DAI , DOT , ETH , FTM , LTC , MANA , MATIC , PAXG , SAND , SLP , SOL , UNI , USDC , USDT , XLM

// fiat: ARS , BRL

// Ejemplo: https://criptoya.com/api/lemoncash/aave/ars/0.1

// Endpoint: /api/binancep2p/{coin}/{fiat}

// coin: ADA , BNB , BTC , DAI , DOGE , ETH , MATIC , SLP , USDT , XRP

// fiat: UYU , ARS , COP , PEN , VES , BOB , DOP , PYG , CLP , MXN , BRL , USD

// Ejemplo: https://criptoya.com/api/binancep2p/ada/uyu/0.1

// Salida:

// ask:(float) Precio de compra reportado por el exchange, sin sumar comisiones.
// totalAsk:(float) Precio de compra final incluyendo las comisiones de transferencia y trade.
// bid:(float) Precio de venta reportado por el exchange, sin restar comisiones.
// totalBid:(float) Precio de venta final incluyendo las comisiones de transferencia y trade.
// time:(int) Timestamp del momento en que fue actualizada esta cotización.
