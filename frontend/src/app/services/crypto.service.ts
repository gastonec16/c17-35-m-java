import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class CryptoService {
    http = inject(HttpClient)

    getCryptoPrices(crypto: string, fiat: string) {
        return this.http.get<any>(`https://criptoya.com/api/bitsoalpha/${crypto}/${fiat}`)
    }
}

// Endpoint: /api/bitsoalpha/{coin}/{fiat}

// coin: ADA , BAT , BCH , BTC , DAI , DOGE , DOT , ETH , LINK , LTC , MANA , MATIC , SHIB , SOL , TRX , USDC , USDT , XRP
// fiat: BRL , MXN , USD , COP , ARS

// Ejemplo: https://criptoya.com/api/bitsoalpha/ada/brl/0.1

// Salida:

// ask:(float) Precio de compra reportado por el exchange, sin sumar comisiones.
// totalAsk:(float) Precio de compra final incluyendo las comisiones de transferencia y trade.
// bid:(float) Precio de venta reportado por el exchange, sin restar comisiones.
// totalBid:(float) Precio de venta final incluyendo las comisiones de transferencia y trade.
// time:(int) Timestamp del momento en que fue actualizada esta cotización.
