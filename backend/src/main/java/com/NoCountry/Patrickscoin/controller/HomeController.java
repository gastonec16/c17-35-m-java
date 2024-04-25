package com.NoCountry.Patrickscoin.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/")
public class HomeController {
    @GetMapping("")
    public ResponseEntity<?> getHome() {
        return ResponseEntity.ok("Patrick's Coins Api");
    }
    
}
