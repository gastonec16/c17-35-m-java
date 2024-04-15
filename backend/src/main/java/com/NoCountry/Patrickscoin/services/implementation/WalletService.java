package com.NoCountry.Patrickscoin.services.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.NoCountry.Patrickscoin.dto.DepositDto;
import com.NoCountry.Patrickscoin.entities.Wallet;
import com.NoCountry.Patrickscoin.exception.WalletException;
import com.NoCountry.Patrickscoin.repositories.WalletRepository;
import com.NoCountry.Patrickscoin.services.IWalletService;

@Service
public class WalletService implements IWalletService{

    @Autowired
    private WalletRepository walletRepository;

    @Override
    public void deposit(Long walletId, DepositDto depositDto) {
        
    }

    @Override
    public Wallet findById(Long walletId) throws WalletException {
        return walletRepository.findById(walletId).orElseThrow(()-> new WalletException("Wallet noencontrada"));;
    }

}
