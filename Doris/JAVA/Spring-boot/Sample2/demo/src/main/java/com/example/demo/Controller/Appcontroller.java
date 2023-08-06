package com.example.demo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
@RestController  //Request and Response should be JSON

public class Appcontroller {

    @GetMapping("/get-app")
    public String getApp() {

        return "Hi Dandy";
    }
@GetMapping("/get-user-info")
public User getUserInfo() {


    User user = new User();
    user.setCity("NYC");
    user.setCountry("USA");
    user.setFirstName("John");
    user.setLastName("Doe");
    user.setDob("7/27/2023");
    user.setStreetName("5th avenue");
    
    


    return user;
}





}
