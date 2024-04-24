package com.NoCountry.Patrickscoin.controller.api.wallet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoCountry.Patrickscoin.dto.request.BuyCriptoDto;
import com.NoCountry.Patrickscoin.dto.request.SellCriptoDto;
import com.NoCountry.Patrickscoin.exception.WalletException;
import com.NoCountry.Patrickscoin.services.ICompraVentaService;

@RestController
@RequestMapping("/api/wallet")
public class CompraVentaController {

    @Autowired
    private ICompraVentaService compraVentaService;

    @PostMapping("/{walletId}/compra")
    public ResponseEntity<?> compraCripto(@PathVariable Long walletId, @RequestBody BuyCriptoDto dto) throws WalletException {
        compraVentaService.compra(walletId, dto);
        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{walletId}/venta")
    public ResponseEntity<?> ventaCripto(@PathVariable Long walletId,@RequestBody SellCriptoDto sellCripto) throws WalletException {
        compraVentaService.venta(walletId, sellCripto);
        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }

}
