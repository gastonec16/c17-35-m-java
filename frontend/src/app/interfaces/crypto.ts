export interface CryptoYaOutput {
    ask: number
    totalAsk: number
    bid: number
    totalBid: number
    time: number
}

// Endpoint: /api/bitsoalpha/{coin}/{fiat}

// coin: ADA , BAT , BCH , BTC , DAI , DOGE , DOT , ETH , LINK , LTC , MANA , MATIC , SHIB , SOL , TRX , USDC , USDT , XRP

// fiat: BRL , MXN , USD , COP , ARS

// Ejemplo: https://criptoya.com/api/bitsoalpha/ada/brl/0.1
