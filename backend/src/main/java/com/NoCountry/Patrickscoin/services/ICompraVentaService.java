package com.NoCountry.Patrickscoin.services;

import com.NoCountry.Patrickscoin.dto.request.BuyCriptoDto;
import com.NoCountry.Patrickscoin.dto.request.SellCriptoDto;
import com.NoCountry.Patrickscoin.exception.WalletException;


public interface ICompraVentaService {
    public void compra(Long walletId, BuyCriptoDto dto) throws WalletException;
    public void venta(Long walletId, SellCriptoDto sellCripto) throws WalletException;
}
