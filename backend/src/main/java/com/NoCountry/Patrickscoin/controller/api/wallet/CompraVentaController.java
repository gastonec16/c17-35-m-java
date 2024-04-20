package com.NoCountry.Patrickscoin.controller.api.wallet;

import java.util.Map;

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
//        sugerencia de endpoint para que quede mas limpia la ruta
//              /api/wallet/{walletId}/{operacion} 
@RequestMapping("/apiCompraVenta")
public class CompraVentaController {

    @Autowired
    private ICompraVentaService compraVentaService;

    @PostMapping("/compra/{walletId}")
    //                                                              Create un dto para manejar mejor los datos
public ResponseEntity<?> compraCripto(@RequestBody Long walletId, BuyCriptoDto dto) throws WalletException {

        compraVentaService.compra(walletId, dto);

        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{walletID}/sell")
    public ResponseEntity<?> ventaCripto(@RequestBody Long walletId, SellCriptoDto sellCripto){
        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }

}
