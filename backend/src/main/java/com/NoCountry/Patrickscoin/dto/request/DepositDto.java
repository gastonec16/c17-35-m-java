package com.NoCountry.Patrickscoin.dto.request;

import com.NoCountry.Patrickscoin.entities.enumeration.MoneyType;

public record DepositDto(double amount, MoneyType type) {
}