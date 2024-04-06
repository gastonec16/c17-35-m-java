package com.NoCountry.Patrickscoin.services;

import com.NoCountry.Patrickscoin.entities.User;
import com.NoCountry.Patrickscoin.repositories.UserRepository;

public class RegisterService {

    private UserRepository userRepository;

    public User registerUser(User user){
        //TO DO: LOGICA VERIFICACION POR EMAIL

        return userRepository.save(user);
    }

}
