package com.NoCountry.Patrickscoin.services.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.NoCountry.Patrickscoin.dto.request.DepositDto;
import com.NoCountry.Patrickscoin.entities.Wallet;
import com.NoCountry.Patrickscoin.entities.enumeration.MoneyType;
import com.NoCountry.Patrickscoin.exception.WalletException;
import com.NoCountry.Patrickscoin.repositories.WalletRepository;
import com.NoCountry.Patrickscoin.services.IWalletService;

import jakarta.transaction.Transactional;

@Service
public class WalletService implements IWalletService{

    @Autowired
    private WalletRepository walletRepository;

    @Transactional
    @Override
    public void deposit(Long walletId, DepositDto depositDto /*, CardDto card*/) throws WalletException {
        Wallet wallet = findById(walletId);

        if(depositDto.getAmount() <= 0)
            throw new WalletException("El monto a ingresar debe de ser valido");

        //TODO hacer validacion de la tarjeta

        if(depositDto.getName().equalsIgnoreCase(MoneyType.ARS.toString()))
            wallet.setLocalMoney(depositDto.getAmount());
        if(depositDto.getName().equalsIgnoreCase(MoneyType.USD.toString()))
            wallet.setGlobalMoney(depositDto.getAmount());

    }

    @Override
    public Wallet findById(Long walletId) throws WalletException {
        return walletRepository.findById(walletId).orElseThrow(()-> new WalletException("Wallet no encontrada"));
    }

    @Override
    public Wallet getWalletByUserId(Long userId) throws WalletException {
        return walletRepository.findByUserId(userId).orElseThrow(() -> new WalletException("Wallet no encontrada"));
    }

}
