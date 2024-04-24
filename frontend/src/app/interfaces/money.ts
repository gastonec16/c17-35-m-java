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
