package com.NoCountry.Patrickscoin.services.implementation;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.NoCountry.Patrickscoin.entities.Coin;
import com.NoCountry.Patrickscoin.entities.Wallet;
import com.NoCountry.Patrickscoin.entities.enumeration.CoinType;
import com.NoCountry.Patrickscoin.entities.enumeration.MoneyType;
import com.NoCountry.Patrickscoin.exception.WalletException;
import com.NoCountry.Patrickscoin.repositories.WalletRepository;
import com.NoCountry.Patrickscoin.services.ICompraVentaService;

@Service
public class CompraVentaService implements ICompraVentaService{

    @Autowired
    private WalletService walletService;

    @Autowired
    private WalletRepository walletRepository;

    @Override
    public void compra(long walletId, String coin, String fiat, double cantidadFiat, double cantidadCripto) throws WalletException {

        Wallet wallet = walletService.findById(walletId);

        if(fiat.equals(MoneyType.ARS.name())) wallet.setLocalMoney(wallet.getLocalMoney()-cantidadFiat);
        if(fiat.equals(MoneyType.USD.name())) wallet.setLocalMoney(wallet.getGlobalMoney()-cantidadFiat);

        Set<Coin> coins = wallet.getCoins(); 
        
        boolean coinExists = false;
        for(Coin existingCoin : coins){
            if(coin.equals(existingCoin.getName())){
                existingCoin.setQuantity(existingCoin.getQuantity()+cantidadCripto);
                coinExists = true;
            }
        }
        if(!coinExists){
            Coin newCoin = Coin.builder()
                    .name(coin)
                    .quantity(cantidadCripto)
                    //.type(CoinType.CRYPTO)
                    .wallet(wallet)
                    .build();
                coins.add(newCoin);
        }

        wallet.setCoins(coins);
        walletRepository.save(wallet);
    }

    @Override
    public void venta(long walletId, String coin, String fiat, double cantidad, double cantidadCripto)
            throws WalletException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'venta'");
    }

    
    
}
