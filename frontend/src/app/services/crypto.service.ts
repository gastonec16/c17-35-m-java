import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class CryptoService {
    http = inject(HttpClient)

    getCryptoPrices(crypto: string, fiat: string) {
        return this.http.get<any>(`https://criptoya.com/api/lemoncash/${crypto}/${fiat}/0.1`)
    }

    getUsdtPrice() {
        return this.http.get<any>(`https://criptoya.com/api/binancep2p/usdt/usd/0.1`)
    }

    getAllCryptoPrices() {}
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
