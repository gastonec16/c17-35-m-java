package com.NoCountry.Patrickscoin.utils.validator;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.NoCountry.Patrickscoin.dto.UserDto;

import lombok.experimental.UtilityClass;

@UtilityClass
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

    Map<String, String> contrains = new HashMap<>();

    public static boolean validateRegister(UserDto userDto, List<String> emails) {
        contrains.clear();
        if (!emailIsValid(userDto.getEmail(), emails))
            contrains.put("email", "email no valido!");
        if (!nameIsValid(userDto.getName()))
            contrains.put("name", "name no valido!");
        if (!lastNameIsValid(userDto.getLastName()))
            contrains.put("lastName", "lastName no valido!");
        if (!passwordIsValid(userDto.getPassword()))
            contrains.put("password", "password no valido!");
        if(!passwordCoincident(userDto))
            contrains.put("repeatPassword", "password no coinciden!");
        return contrains.isEmpty();
    }

    public Map<String, String> getContrains() {
        return contrains;
    }

    private static boolean emailIsValid(String email, List<String >emails) {
        return !emails.contains(email) && email.matches(VALID_EMAIL) && email.length() <= MAX_EMAIL;
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
    private static boolean passwordCoincident(UserDto userDto){
        return userDto.getPassword().equals(userDto.getRepeatPassword());
    }
}
