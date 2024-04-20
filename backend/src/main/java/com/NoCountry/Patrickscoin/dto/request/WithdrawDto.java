package com.NoCountry.Patrickscoin.dto.request;

import com.NoCountry.Patrickscoin.entities.enumeration.MoneyType;

public record WithdrawDto(MoneyType type, double amount, String cuil, String keyTransfer){

}
