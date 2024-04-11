package com.NoCountry.Patrickscoin.dto;

import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.Getter;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Setter @Getter @NoArgsConstructor @AllArgsConstructor 
@Builder
public class CoinDto {
    
    private String name;
    private float quantity;
    
}
