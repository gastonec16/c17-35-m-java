package com.NoCountry.Patrickscoin.utils.validator;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.NoCountry.Patrickscoin.dto.request.UserDto;
import com.NoCountry.Patrickscoin.exception.UserException;
import com.NoCountry.Patrickscoin.services.IUserService;

@Component
public class UserValidator {
    private final static int MAX_EMAIL = 100;
    private final static int MAX_FULLNAME = 50;
    private final static int MIN_LASTNAME = 2;
    private final static int MIN_NAME = 3;
    private final static int MIN_PASSWORD = 8;
    private final static int MAX_PASSWORD = 50;

    private final static String VALID_NAME = "(\\p{Alpha}|(á|é|í|ó|ú|))+[ (\\p{Alpha}|(á|é|í|ó|ú|))]*";
    private final static String VALID_EMAIL = "[a-zA-Z0-9]{3,}[\\._\\-\\+]*[a-zA-Z0-9]*@\\p{Lower}{3,}.com";
    private final static String VALID_PASSWORD = "^(?=\\p{Alnum}*[a-z])(?=\\p{Alnum}*[A-Z])(?=\\p{Alnum}*[0-9])\\p{Alnum}*$";

    @Autowired
    private IUserService userService;

    public void validateRegister(UserDto userDto) throws UserException{
        if (!emailIsValid(userDto.getEmail()))
            throw new UserException("email no valido");
        if (!nameIsValid(userDto.getName()))
            throw new UserException("nombre debe tener minimo 3 caracteres alfabeticos");
        if (!lastNameIsValid(userDto.getLastName()))
            throw new UserException("apellido debe tener minimo 2 caracteres alfabeticos");
        if (!passwordIsValid(userDto.getPassword()))
            throw new UserException("contraseña debe tener como mínimo una mayúsculas, minúsculas, números y 8 caracteres");
        if(!emailNotExist(userDto.getEmail(), userService.findAllEmail()))
            throw new UserException("email ya esta registrado");
    }

    private static boolean emailIsValid(String email) {
        return email.matches(VALID_EMAIL) && email.length() <= MAX_EMAIL;
    }
    private static boolean emailNotExist(String email,List<String >emails) {
        return !emails.contains(email);
    }

    private static boolean nameIsValid(String name) {
        return name.matches(VALID_NAME) && (name.length() <= MAX_FULLNAME && name.length() >= MIN_NAME);
    }

    private static boolean lastNameIsValid(String lastname) {
        return lastname.matches(VALID_NAME) && (lastname.length() <= MAX_FULLNAME && lastname.length() >= MIN_LASTNAME);
    }

    private static boolean passwordIsValid(String password) {
        return password.matches(VALID_PASSWORD)
                && (password.length() <= MAX_PASSWORD && password.length() >= MIN_PASSWORD);
    }
}
