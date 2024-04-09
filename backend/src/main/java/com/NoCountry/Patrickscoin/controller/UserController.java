package com.NoCountry.Patrickscoin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoCountry.Patrickscoin.dto.UserDto;
import com.NoCountry.Patrickscoin.entities.User;
import com.NoCountry.Patrickscoin.services.IUserService;

@RestController
@RequestMapping("/api")
public class UserController {
    
    @Autowired
    private IUserService userService;

    @PostMapping ("/users")
    public ResponseEntity<User> registerUser(@RequestBody UserDto userdto){
        User registeredUser = userService.registerUser(userdto);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }
}
