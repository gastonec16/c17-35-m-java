export interface Wallet {
    id: number
    ars: number
    usd: number
    coins: WalletCoins[]
}

export interface Coin {
    id: number
    name: string
    shortName: string
}

export interface WalletCoins {
    coin: Coin
    quantity: number
}
