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

        validateDeposit(depositDto);
        //TODO hacer validacion de la tarjeta

        if(depositDto.getName().equalsIgnoreCase(MoneyType.ARS.name()))
            wallet.setLocalMoney(depositDto.getAmount());
        if(depositDto.getName().equalsIgnoreCase(MoneyType.USD.name()))
            wallet.setGlobalMoney(depositDto.getAmount());

    }

    @Override
    public Wallet findById(Long walletId) throws WalletException {
        return walletRepository.findById(walletId).orElseThrow(()-> new WalletException("Wallet no encontrada"));
    }

    //valida que el monto sea valido
    private boolean validateDeposit(DepositDto deposit) throws WalletException{
        if(deposit.getName().equalsIgnoreCase(MoneyType.USD.name()) && deposit.getAmount() < 1)
            throw new WalletException("El monto no es valido");
        if(deposit.getName().equalsIgnoreCase(MoneyType.ARS.name()) && deposit.getAmount() < 1000)
            throw new WalletException("El monto no es valido");
            
        return true;
    }

}
