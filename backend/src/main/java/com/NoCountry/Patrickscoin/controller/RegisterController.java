package com.NoCountry.Patrickscoin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoCountry.Patrickscoin.entities.User;
import com.NoCountry.Patrickscoin.models.UserModel;
import com.NoCountry.Patrickscoin.services.IRegisterService;





@RestController
@RequestMapping("/api/users")
public class RegisterController {
     

    @Autowired
    private IRegisterService userService;

    @PostMapping
    public ResponseEntity<User> registerUser(@RequestBody UserModel userModel){
        User registeredUser = userService.registerUser(userModel);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }
}
