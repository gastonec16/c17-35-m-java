package com.NoCountry.Patrickscoin.mapper;

import org.springframework.stereotype.Component;

import com.NoCountry.Patrickscoin.dto.request.UserDto;
import com.NoCountry.Patrickscoin.entities.User;


@Component
public class UserMapper {
    
    public static User dtoToEntity(UserDto dto){

        return User.builder()
            .name(dto.getName())
            .lastName(dto.getLastName())
            .email(dto.getEmail())
            .password(dto.getPassword())
            .build();
    }

    public static UserDto entityToDto(User user){
        return UserDto.builder()
            .name(user.getName())
            .lastName(user.getLastName())
            .email(user.getEmail())
            .password(user.getPassword())
            .build();
    }
}
