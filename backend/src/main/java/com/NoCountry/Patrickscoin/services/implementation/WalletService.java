package com.NoCountry.Patrickscoin.services.implementation;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.NoCountry.Patrickscoin.dto.request.DepositDto;
import com.NoCountry.Patrickscoin.dto.request.WithdrawDto;
import com.NoCountry.Patrickscoin.dto.response.TicketWithdrawDtoResponse;
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

    @Transactional
    @Override
    public TicketWithdrawDtoResponse withdraw(Long walletId, WithdrawDto withdraw) throws WalletException{
        Wallet wallet = findById(walletId);

        validateFound(wallet, withdraw);
        substractFounds(wallet, withdraw);
        //Envia fondos a al cvu proporcionado...
        
        //crea el ticket con la informacion
        return new TicketWithdrawDtoResponse(
            withdraw.type(),
            withdraw.amount(),
            withdraw.cuil(),
            LocalDateTime.now(),
            withdraw.keyTransfer()
        );
    }
    private void substractFounds(Wallet wallet, WithdrawDto withdraw) {
        if(withdraw.type().equals(MoneyType.USD))
            wallet.setGlobalMoney(wallet.getGlobalMoney()-withdraw.amount());
        if(withdraw.type().equals(MoneyType.ARS))
            wallet.setLocalMoney(wallet.getLocalMoney()-withdraw.amount());
    }

    private boolean validateFound(Wallet wallet, WithdrawDto withdraw) throws WalletException {
        if(withdraw.amount() <=0 )
            throw new WalletException("Monto de retiro invalido");
        if(withdraw.type().equals(MoneyType.USD))
            return withdraw.amount() <= wallet.getGlobalMoney();
        if(withdraw.type().equals(MoneyType.ARS))
            return withdraw.amount() <= wallet.getLocalMoney();
        
        throw new WalletException("Fondos insuficientes");
    }

    @Override
    public Wallet findById(Long walletId) throws WalletException {
        return walletRepository.findById(walletId).orElseThrow(()-> new WalletException("Wallet no encontrada"));
    }

    @Override
    public Wallet getWalletByUserId(Long userId) throws WalletException {
        return walletRepository.findByUserId(userId).orElseThrow(() -> new WalletException("Wallet no encontrada"));
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
