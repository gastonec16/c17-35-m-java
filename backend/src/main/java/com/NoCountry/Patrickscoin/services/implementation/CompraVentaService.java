package com.NoCountry.Patrickscoin.services.implementation;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.NoCountry.Patrickscoin.dto.request.BuyCriptoDto;
import com.NoCountry.Patrickscoin.dto.request.SellCriptoDto;
import com.NoCountry.Patrickscoin.entities.Coin;
import com.NoCountry.Patrickscoin.entities.Wallet;
import com.NoCountry.Patrickscoin.entities.enumeration.MoneyType;
import com.NoCountry.Patrickscoin.exception.WalletException;
import com.NoCountry.Patrickscoin.repositories.CoinRepository;
import com.NoCountry.Patrickscoin.repositories.WalletRepository;
import com.NoCountry.Patrickscoin.services.ICompraVentaService;


@Service
public class CompraVentaService implements ICompraVentaService{

    @Autowired
    private WalletService walletService;

    @Autowired
    private WalletRepository walletRepository;

    @Autowired
    private CoinRepository coinRepository;

    @Override
    @Transactional
    public void compra(Long walletId, BuyCriptoDto dto) throws WalletException {
        Wallet wallet = walletService.findById(walletId);

        if(!validFounds(wallet, dto) || dto.quiantity() <= 0)
            throw new WalletException("monto invalido!");


        if(dto.moneyType().equals(MoneyType.USD)) wallet.setGlobalMoney(wallet.getGlobalMoney()-dto.quantityFiat());
        if(dto.moneyType().equals(MoneyType.ARS)) wallet.setLocalMoney(wallet.getLocalMoney()-dto.quantityFiat());



        //CRIPTO EN WALLET. ACTUALIZAR
        Set<Coin> coins = wallet.getCoins();
        boolean coinExists = false;
        for(Coin existingCoing: coins){
            if(dto.cripto().name().equals(existingCoing.getCryptoName().name())){
                existingCoing.setQuantity(existingCoing.getQuantity()+dto.quiantity());
                coinExists = true;
            }
        }
        //CRIPTO NO EN WALLET. AGREGAR
        if(!coinExists){
            Coin newCoin = Coin.builder()
                
                .quantity(dto.quiantity())
                .cryptoName(dto.cripto())
                .wallet(wallet)
                .build();
                coins.add(newCoin);
                coinRepository.save(newCoin);
        }

        wallet.setCoins(coins);
        walletRepository.save(wallet);

    }

    private boolean validFounds(Wallet wallet, BuyCriptoDto dto) {
        if(dto.quantityFiat() <=0)
            return false;

        if(dto.moneyType().equals(MoneyType.USD))
            return wallet.getGlobalMoney() >= dto.quantityFiat();
        if(dto.moneyType().equals(MoneyType.ARS))
            return wallet.getLocalMoney() >= dto.quantityFiat();
        return false;
    }

    @Transactional
    @Override
    public void venta(Long walletId, SellCriptoDto sellCripto) throws WalletException {
        Wallet wallet = walletService.findById(walletId);
        
        Coin coin = wallet.getCoins().stream()
                .filter( c -> c.getCryptoName().equals(sellCripto.cripto()))
                .findFirst( ).orElseThrow(() -> new WalletException("No tiene adquirida la cripto seleccionada"));

        if(coin.getQuantity() < sellCripto.quantityCrypto())
            throw new WalletException("Cantidad seleccionada invalida");

        if(sellCripto.moneyType().equals(MoneyType.USD))
            wallet.setGlobalMoney(wallet.getGlobalMoney() + sellCripto.quantityFiat());
        if(sellCripto.moneyType().equals(MoneyType.ARS))
            wallet.setLocalMoney(wallet.getLocalMoney() + sellCripto.quantityFiat());

        coin.setQuantity(coin.getQuantity() - sellCripto.quantityCrypto());

        if( coin.getQuantity() == 0f )
            coinRepository.delete(coin);
    }
    
}
