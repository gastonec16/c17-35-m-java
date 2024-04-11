package com.NoCountry.Patrickscoin.services.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.NoCountry.Patrickscoin.dto.UserDto;
import com.NoCountry.Patrickscoin.entities.User;
import com.NoCountry.Patrickscoin.exception.UserException;
import com.NoCountry.Patrickscoin.mapper.UserMapper;
import com.NoCountry.Patrickscoin.repositories.UserRepository;
import com.NoCountry.Patrickscoin.services.IUserService;
import com.NoCountry.Patrickscoin.utils.validator.UserValidator;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User registerUser(UserDto userDto) {

        // TODO LOGICA DE VALIDACION POR EMAIL
        if(!UserValidator.validateRegister(userDto, findAllEmail())){
            //TODO agregar los contrains al emnsaje del UserException
            throw new UserException("Usuario no pudo creado");
        }
        return userRepository.save(UserMapper.dtoToEntity(userDto));
    }

    @Override
    public UserDto findById(Long id) throws Exception {
        User user = userRepository.findById(id).orElseThrow(() -> {
            throw new UserException("Usuario no encontrado");
        });
        return UserMapper.entityToDto(user);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    public List<String> findAllEmail(){
        return findAll().stream().map(User::getEmail).toList();
    }

    public UserDto findByEmail(String email) throws Exception {
        System.err.println("Buscando usuario por email: " + email);
        User user = userRepository.findByEmail(email);
        if (user == null) {
            System.out.println("No se encontró ningún usuario con el email: " + email);
        } else {
            System.err.println("Usuario encontrado: " + user.getName());
        }
        
        return UserMapper.entityToDto(user);
    }
}
