package com.NoCountry.Patrickscoin.services;

import com.NoCountry.Patrickscoin.exception.WalletException;


public interface ICompraVentaService {

    public void compra(long walletId, String coin, String fiat, double cantidad, double cantidadCripto) throws WalletException;
    public void venta(long walletId, String coin, String fiat, double cantidad, double cantidadCripto) throws WalletException;
    
}
