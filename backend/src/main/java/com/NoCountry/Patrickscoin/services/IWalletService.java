package com.NoCountry.Patrickscoin.services;

import com.NoCountry.Patrickscoin.dto.request.DepositDto;
import com.NoCountry.Patrickscoin.dto.request.WithdrawDto;
import com.NoCountry.Patrickscoin.dto.response.TicketWithdrawDtoResponse;
import com.NoCountry.Patrickscoin.entities.Wallet;
import com.NoCountry.Patrickscoin.exception.WalletException;

public interface IWalletService {
    public void deposit(Long walletId, DepositDto depositDto) throws WalletException ;
    public Wallet findById(Long walletId) throws WalletException;
    public Wallet getWalletByUserId(Long userId) throws WalletException;
    public TicketWithdrawDtoResponse withdraw(Long walletId, WithdrawDto withdraw) throws WalletException;
}
