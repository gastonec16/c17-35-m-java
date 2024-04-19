package com.NoCountry.Patrickscoin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoCountry.Patrickscoin.dto.request.UserDto;
import com.NoCountry.Patrickscoin.services.IUserService;
import com.NoCountry.Patrickscoin.utils.validator.UserValidator;


@RestController
@RequestMapping("/public")
@CrossOrigin(allowedHeaders = "*")
public class UserPublicController {

    @Autowired
    private IUserService userService;

    @Autowired
    private UserValidator userValidator;

    @PostMapping(value = "register")
    public ResponseEntity<?> registerUser(@RequestBody UserDto userdto) {
        userValidator.validateRegister(userdto);
        userService.register(userdto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping(value="log-in")
    public ResponseEntity<?> login(@RequestBody UserDto user) throws Exception {
        return ResponseEntity.ok(userService.login(user));

    }

}