package com.NoCountry.Patrickscoin.services;

import com.NoCountry.Patrickscoin.dto.request.SellCriptoDto;
import com.NoCountry.Patrickscoin.exception.WalletException;


public interface ICompraVentaService {
    public void compra(long walletId, String coin, String fiat, double cantidad, double cantidadCripto) throws WalletException;
    public void venta(Long walletId, SellCriptoDto sellCripto) throws WalletException;
}
