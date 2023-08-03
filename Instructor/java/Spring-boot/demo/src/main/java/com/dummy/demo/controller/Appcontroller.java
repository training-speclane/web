package com.dummy.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dummy.demo.entity.User;
import com.dummy.demo.service.UserService;

@RestController
public class Appcontroller {

  @Autowired
  private UserService userService;

    @GetMapping("/get-app")
  public String getApp () {
    return "Hello";
  }



  
  @CrossOrigin(origins = "http://localhost:3000/")
  @GetMapping("/get-user-info")
  public User getUserInfo () {
    User user = userService.findByFirstName("John");
    return user;
    
  }
 

  
  
  @CrossOrigin(origins = "http://localhost:3000/")
  @PostMapping("/save-user")
  public String saveUserInfo (@RequestBody User user) {

    User newUser =  userService.saveUser(user);
    if(newUser != null && newUser.getUsid() != null) {
       return "User saved successfully!";  
       
    }
      return "Could nt save user";

  }
 

}



