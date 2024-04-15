package com.NoCountry.Patrickscoin.services;

import com.NoCountry.Patrickscoin.dto.DepositDto;
import com.NoCountry.Patrickscoin.entities.Wallet;
import com.NoCountry.Patrickscoin.exception.WalletException;

public interface IWalletService {
    public void deposit(Long walletId, DepositDto depositDto);
    public Wallet findById(Long walletId) throws WalletException;
}
