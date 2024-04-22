package com.NoCountry.Patrickscoin.controller.api.crypto;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoCountry.Patrickscoin.dto.request.CryptoDto;
import com.NoCountry.Patrickscoin.entities.enumeration.CryptoName;
import com.NoCountry.Patrickscoin.services.implementation.CryptoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api/crypto")
public class CryptoController {

    @Autowired
    private CryptoService cryptoService;

    @GetMapping("")
    public ResponseEntity<?> getAllCrypto() {
        return ResponseEntity.ok(cryptoService.getAllCrypto());
    }

    @GetMapping("/{cryptoName}")
    public ResponseEntity<CryptoDto> getCrypto(@PathVariable CryptoName cryptoName) {
        return ResponseEntity.ok(cryptoService.getCryptoByName(cryptoName));
    }
    
}
