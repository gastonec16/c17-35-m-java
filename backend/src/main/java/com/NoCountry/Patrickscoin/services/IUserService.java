package com.NoCountry.Patrickscoin.services;

import java.util.List;

import com.NoCountry.Patrickscoin.dto.request.UserDto;
import com.NoCountry.Patrickscoin.dto.response.UserLoguedDto;
import com.NoCountry.Patrickscoin.entities.User;

public interface IUserService {
    public UserDto findById(Long id) throws Exception;
    public List<User> findAll();
    public List<String> findAllEmail();
    public UserDto findByEmail(String email, String password) throws Exception;

    public void register(UserDto userdto);
    public UserLoguedDto login(UserDto user);

}
