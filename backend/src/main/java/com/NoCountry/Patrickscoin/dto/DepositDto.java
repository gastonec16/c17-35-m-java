package com.NoCountry.Patrickscoin.dto;

import com.NoCountry.Patrickscoin.entities.enumeration.CoinType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter @Getter @NoArgsConstructor @AllArgsConstructor
@Builder
public class DepositDto {
    private Long quantity;
    private CoinType type;
}
