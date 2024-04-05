package com.NoCountry.Patrick.sCoins.services;
import com.NoCountry.Patrick.sCoins.entities.User;
import com.NoCountry.Patrick.sCoins.repositories.UserRepository;




import org.springframework.stereotype.Service;

@Service
public class UserService {

    //TO DO: AUTOWIRED?
    private UserRepository userRepository;

    public User registerUser(User user){
        //TO DO: IMPLEMENTAR LOGICA DE VALIDACIóN
        return userRepository.save(user);
    }

}
