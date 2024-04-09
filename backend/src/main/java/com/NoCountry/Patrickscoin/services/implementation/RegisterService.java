package com.NoCountry.Patrickscoin.services.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.NoCountry.Patrickscoin.entities.User;
import com.NoCountry.Patrickscoin.models.UserModel;
import com.NoCountry.Patrickscoin.repositories.UserRepository;
import com.NoCountry.Patrickscoin.services.IRegisterService;

@Service
public class RegisterService  implements IRegisterService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User registerUser(UserModel user) {
        // TODO LOGICA DE VALIDACION POR EMAIL
        User userEntitie = new User();
        
        userEntitie.setName(user.getName());
        userEntitie.setLastname(user.getLastName());
        userEntitie.setPassword(user.getPassword());
        userEntitie.setEmail(user.getEmail());


        return userRepository.save(userEntitie);
    }
    
}
