export interface Wallet {
    id: number
    ars: number
    usd: number
    coins: Coin[]
}

export interface Coin {
    name: string
    cryptoName: string
    quantity: number
}
