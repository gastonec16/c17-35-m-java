package com.NoCountry.Patrickscoin.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor

public class UserModel {
    private String name;
    private String lastName;
    private String email;
    private String password;

}


