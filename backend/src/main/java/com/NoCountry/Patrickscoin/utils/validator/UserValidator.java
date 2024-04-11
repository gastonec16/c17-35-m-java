package com.NoCountry.Patrickscoin.utils.validator;

import java.util.regex.Pattern;

import ch.qos.logback.core.boolex.EvaluationException;
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
    private final static String VALID_EMAIL = "[a-zA-Z0-9]{3,}(_|-|.|\\+)*@\\p{Lower}{3,}.com";
    private final static String VALID_PASSWORD2 = "";
    private final static String VALID_PASSWORD = "(([a-z]+[A-Z]?[0-9]?)|([a-z]?[A-Z]+[0-9]?)|([a-z]?[A-Z]?[0-9]+))+";

    public static void main(String[] args) throws EvaluationException { 
        boolean user = Pattern.matches(VALID_PASSWORD, "2www");
        System.out.println("\n Password es: "+ user);
    }

    // public static boolean validateRegister(UserDto userDto){
        
    // }
    private static boolean emailIsValid(String email){
        return Pattern.matches(VALID_EMAIL, email) && email.length() <= MAX_EMAIL;
    }
    private static boolean nameIsValid(String name){
        return Pattern.matches(VALID_NAME, name) && (name.length() <= MAX_FULLNAME && name.length() >= MIN_NAME);
    }
    private static boolean lastNameIsValid(String lastname){
        return Pattern.matches(VALID_NAME, lastname) && (lastname.length() <= MAX_FULLNAME && lastname.length() >= MIN_LASTNAME);
    }

    
}
