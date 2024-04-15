package com.NoCountry.Patrickscoin.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/api/wallet")
public class WalletController {

    @PostMapping("/")
    public ResponseEntity<?> depositFiat(@PathVariable("walletId") Long walletId, @RequestBody DesposiDto depositDto){
        walletService.deposit(walletId, depositDto);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
