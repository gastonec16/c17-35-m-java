package com.NoCountry.Patrickscoin.dto.response;

import java.time.LocalDateTime;

import com.NoCountry.Patrickscoin.entities.enumeration.MoneyType;

public record TicketWithdrawDtoResponse(MoneyType type, double amount, String cuil, LocalDateTime withdrawDate, String keyTransfer){
}
