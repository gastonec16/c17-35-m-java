package com.NoCountry.Patrickscoin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoCountry.Patrickscoin.entities.Wallet;
import com.NoCountry.Patrickscoin.exception.WalletException;
import com.NoCountry.Patrickscoin.services.IWalletService;


@RestController
@RequestMapping("/apiCompraVenta")
public class CompraVentaController {

    @Autowired
    public IWalletService walletService;

    public ResponseEntity<?> compraCripto(@RequestBody long walletId, String coin ) throws WalletException{

        Wallet wallet = walletService.findById(walletId);

        

        
        return null;
    }
    
}
