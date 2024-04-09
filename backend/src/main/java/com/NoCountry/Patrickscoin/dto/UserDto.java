package com.NoCountry.Patrickscoin.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter @Getter @NoArgsConstructor @AllArgsConstructor
@Builder
public class UserDto {

    private String name;
    private String lastname;
    private String email;
    private String password;
    
}
