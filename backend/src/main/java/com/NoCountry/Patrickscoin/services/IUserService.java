package com.NoCountry.Patrickscoin.services;

import java.util.List;

import com.NoCountry.Patrickscoin.dto.UserDto;
import com.NoCountry.Patrickscoin.entities.User;

public interface IUserService {
    public User registerUser(UserDto userDto);
    public UserDto findById(Long id) throws Exception;
    public List<User> findAll();
    public List<String> findAllEmail();
    //TODO INGRESO
    // public User loginUser(UserDto userDto);
    public UserDto findByEmail(String email, String password) throws Exception;
}
