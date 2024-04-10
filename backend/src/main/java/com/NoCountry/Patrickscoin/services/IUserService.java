package com.NoCountry.Patrickscoin.services;

import com.NoCountry.Patrickscoin.dto.UserDto;
import com.NoCountry.Patrickscoin.entities.User;

public interface IUserService {
    public User registerUser(UserDto userDto);
    public UserDto findById(Long id) throws Exception;


    //TODO INGRESO
    public User loginUser(UserDto userDto);
}
