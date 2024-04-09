package com.NoCountry.Patrickscoin.mapper;

import org.springframework.stereotype.Component;

import com.NoCountry.Patrickscoin.dto.UserDto;
import com.NoCountry.Patrickscoin.entities.User;

@Component
public class UserMapper {
    
    public static User dtoToEntity(UserDto dto){
        return User.builder()
            .name(dto.getName())
            .lastname(dto.getLastname())
            .email(dto.getEmail())
            .password(dto.getPassword())
            .build();
    }

    public static UserDto entityToDto(User user){
        return UserDto.builder()
            .name(user.getName())
            .lastname(user.getLastname())
            .email(user.getEmail())
            .password(user.getPassword())
            .build();
    }
}
