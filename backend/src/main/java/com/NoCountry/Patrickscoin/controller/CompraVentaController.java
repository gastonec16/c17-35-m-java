package com.NoCountry.Patrickscoin.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoCountry.Patrickscoin.exception.WalletException;
import com.NoCountry.Patrickscoin.services.ICompraVentaService;

@RestController
@RequestMapping("/apiCompraVenta")
public class CompraVentaController {

    @Autowired
    private ICompraVentaService compraVentaService;

    @PostMapping("/compra/{walletId}")
    public ResponseEntity<?> compraCripto(@PathVariable Long walletId, @RequestBody Map<String, Object> requestBody)
            throws WalletException {
        String coin = (String) requestBody.get("coin");
        String fiat = (String) requestBody.get("fiat");
        Double cantidadFiat = (Double) requestBody.get("cantidadFiat");
        Double cantidadCrito = (Double) requestBody.get("cantidadCrito");

        System.out.println("cantidad de plata--->" + cantidadFiat);
        compraVentaService.compra(walletId, coin, fiat, cantidadFiat, cantidadCrito);

        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }

    @PostMapping("venta")
    public ResponseEntity<?> ventaCripto(@RequestBody long walletId, String coin, String fiat) {

        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }

}
