package com.NoCountry.Patrickscoin.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter @Getter @NoArgsConstructor @AllArgsConstructor
@Builder
@Data
public class UserDto {

    private String name;
    private String lastName;
    private String email;
    private String password;
}


