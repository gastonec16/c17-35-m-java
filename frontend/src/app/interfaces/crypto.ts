import { Coin } from './wallet'

export interface CryptoYaOutput {
    ask: number
    totalAsk: number
    bid: number
    totalBid: number
    time: number
}

export interface CoinList {
    coin: Coin
    usdBuy: number
    arsBuy: number
    usdSell: number
    arsSell: number
}
