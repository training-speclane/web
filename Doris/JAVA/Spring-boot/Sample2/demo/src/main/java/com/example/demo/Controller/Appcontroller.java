package com.example.demo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController  //Request and Response should be JSON

public class Appcontroller {

    @GetMapping("/get-app")
    public String getApp() {

        return "Hi Dandy";
    }







}
