package com.NoCountry.Patrick.sCoins.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class TestController {

    @GetMapping("/api/test")
    public String testEndpoint() {
        return "¡La conexión entre el frontend y el backend funciona correctamente!";
    }
}
