package com.NoCountry.Patrickscoin.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.NoCountry.Patrickscoin.entities.User;
import com.NoCountry.Patrickscoin.services.RegisterService;

public class RegisterController {
    
    private RegisterService userService;

    @PostMapping("/api/register")
    public ResponseEntity<User> registerUser(@RequestBody User user){
        User registeredUser = userService.registerUser(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }
}
