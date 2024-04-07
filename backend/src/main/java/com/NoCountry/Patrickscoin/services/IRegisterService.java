package com.NoCountry.Patrickscoin.services;

import com.NoCountry.Patrickscoin.entities.User;
import com.NoCountry.Patrickscoin.models.UserModel;


public interface IRegisterService {

    public User registerUser(UserModel user);

}
