package com.NoCountry.Patrick.sCoins.services;

import com.NoCountry.Patrick.sCoins.entities.User;
import com.NoCountry.Patrick.sCoins.repositories.UserRepository;

public class RegisterService {

    private UserRepository userRepository;

    public User registerUser(User user){
        //TO DO: LOGICA VERIFICACION POR EMAIL

        return userRepository.save(user);
    }

}
