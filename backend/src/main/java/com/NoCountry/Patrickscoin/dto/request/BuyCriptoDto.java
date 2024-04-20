package com.NoCountry.Patrickscoin.dto.request;

import com.NoCountry.Patrickscoin.entities.enumeration.CryptoName;
import com.NoCountry.Patrickscoin.entities.enumeration.MoneyType;

public record BuyCriptoDto(CryptoName cripto, double quiantity, MoneyType moneyType, double quantityFiat) {



}
