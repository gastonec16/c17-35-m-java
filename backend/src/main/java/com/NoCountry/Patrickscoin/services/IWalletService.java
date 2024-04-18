package com.NoCountry.Patrickscoin.services;

import com.NoCountry.Patrickscoin.dto.request.DepositDto;
import com.NoCountry.Patrickscoin.entities.Wallet;
import com.NoCountry.Patrickscoin.exception.WalletException;

public interface IWalletService {
    public void deposit(Long walletId, DepositDto depositDto) throws WalletException ;
    public Wallet findById(Long walletId) throws WalletException;
}
