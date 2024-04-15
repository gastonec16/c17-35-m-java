package com.NoCountry.Patrickscoin.services.implementation;

import org.springframework.stereotype.Service;

import com.NoCountry.Patrickscoin.dto.DepositDto;
import com.NoCountry.Patrickscoin.services.IUserService;
import com.NoCountry.Patrickscoin.services.IWalletService;

@Service
public class WalletService implements IWalletService{

    @Override
    public void deposit(Long walletId, DepositDto depositDto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deposit'");
    }
    
}
