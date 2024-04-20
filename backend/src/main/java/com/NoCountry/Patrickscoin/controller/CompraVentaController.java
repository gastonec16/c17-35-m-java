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

import com.NoCountry.Patrickscoin.dto.request.SellCriptoDto;
import com.NoCountry.Patrickscoin.exception.WalletException;
import com.NoCountry.Patrickscoin.services.ICompraVentaService;

@RestController
//        sugerencia de endpoint para que quede mas limpia la ruta
//              /api/wallet/{walletId}/{operacion} 
@RequestMapping("/apiCompraVenta")
public class CompraVentaController {

    @Autowired
    private ICompraVentaService compraVentaService;

    @PostMapping("/compra/{walletId}")
    //                                                              Create un dto para manejar mejor los datos
public ResponseEntity<?> compraCripto(@PathVariable Long walletId, @RequestBody Map<String, Object> requestBody) throws WalletException {
    String coin = (String) requestBody.get("coin");
    String fiat = (String) requestBody.get("fiat");
    Double cantidadFiat = (Double) requestBody.get("cantidadFiat");
    Double cantidadCrito = (Double) requestBody.get("cantidadCrito");

        System.out.println("cantidad de plata--->" + cantidadFiat);
        compraVentaService.compra(walletId, coin, fiat, cantidadFiat, cantidadCrito);

        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{walletID}/sell")
    public ResponseEntity<?> ventaCripto(@RequestBody Long walletId, SellCriptoDto sellCripto){
        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }

}
