package com.dummy.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class Appcontroller {


    @GetMapping("/get-app" )
    public String getApp() {

        return "Hello";
    }
}
