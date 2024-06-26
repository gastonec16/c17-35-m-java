package com.NoCountry.Patrickscoin.controller.api.wallet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.NoCountry.Patrickscoin.dto.request.DepositDto;
import com.NoCountry.Patrickscoin.dto.request.WithdrawDto;
import com.NoCountry.Patrickscoin.entities.Wallet;
import com.NoCountry.Patrickscoin.exception.WalletException;
import com.NoCountry.Patrickscoin.services.IWalletService;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/wallet")
public class WalletController {

    @Autowired
    private IWalletService  walletService; 

    @GetMapping("/{id}")
    public ResponseEntity<?> getWalletById(@PathVariable Long id) throws WalletException{
        return ResponseEntity.ok().body(walletService.findById(id));
    }

    @PostMapping("/{walletId}/deposit")
    public ResponseEntity<?> depositFiat(@PathVariable Long walletId, @RequestBody DepositDto depositDto) throws WalletException{
        walletService.deposit(walletId, depositDto);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PostMapping("/{walletId}/withdraw")
    public ResponseEntity<?> withdrawToWallet(@PathVariable Long walletId, @RequestBody WithdrawDto withdraw) throws WalletException{
        return ResponseEntity.ok(walletService.withdraw(walletId, withdraw));
    }
    @GetMapping("/user/{userId}")
    public ResponseEntity<Wallet> getWalletByUserId(@PathVariable Long userId) throws WalletException{
        Wallet wallet = walletService.getWalletByUserId(userId);
        return ResponseEntity.ok(wallet);
    }
    
}
