package com.dummy.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dummy.demo.entity.User;

@RestController

public class Appcontroller {


    @GetMapping("/get-app" )
    public String getApp() {

        return  "Hello";
    }
    
    @GetMapping("/get-user-info")
    public User getUserInfo () {

        User user = new User();
        user.setCity("Elk Rive");
        user.setCountry("USA");
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setDob("7/28/2023");


        return user;
        
    }

}
