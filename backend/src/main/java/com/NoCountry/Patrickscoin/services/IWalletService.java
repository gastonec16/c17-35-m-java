package com.NoCountry.Patrickscoin.services;

import com.NoCountry.Patrickscoin.dto.DepositDto;

public interface IWalletService {
    public void deposit(Long walletId, DepositDto depositDto);
}
