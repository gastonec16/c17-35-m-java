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

export interface DepositMoney {
    amount: number
    type: string
}

export interface WithdrawMoney {
    amount: number
    type: string
    keyTransfer: string
    cuil: string
}
