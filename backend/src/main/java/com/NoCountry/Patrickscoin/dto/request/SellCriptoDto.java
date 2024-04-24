package com.NoCountry.Patrickscoin.dto.request;

import com.NoCountry.Patrickscoin.entities.enumeration.CryptoName;
import com.NoCountry.Patrickscoin.entities.enumeration.MoneyType;

public record SellCriptoDto(CryptoName cripto, double quantityFiat, double quantityCrypto , MoneyType moneyType) {
}
