package com.NoCountry.Patrickscoin.services;
import com.NoCountry.Patrickscoin.entities.User;
import com.NoCountry.Patrickscoin.repositories.UserRepository;




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
