package com.NoCountry.Patrick.sCoins.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.NoCountry.Patrick.sCoins.entities.User;
import com.NoCountry.Patrick.sCoins.services.RegisterService;

public class RegisterController {
    
    private RegisterService userService;

    @PostMapping("/api/register")
    public ResponseEntity<User> registerUser(@RequestBody User user){
        User registeredUser = userService.registerUser(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }
}
