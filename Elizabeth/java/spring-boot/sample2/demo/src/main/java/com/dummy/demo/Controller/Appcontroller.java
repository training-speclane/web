package com.dummy.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dummy.demo.entity.User;
import com.dummy.demo.service.UserService;
import com.dummy.demo.validations.UserValidation;

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
     User user = userService.findByFirstName("John");
    return user;
    
  }
 

  
  
  @CrossOrigin(origins = "http://localhost:3000/")
  @PostMapping("/save-user")
  public String saveUserInfo (@RequestBody User user, BindingResult bindingResult) {

    try {

      // Call a seperate validation class
      UserValidation validation = new UserValidation();
      validation.validate(user, bindingResult);

      if(bindingResult.getFieldErrors().size() > 0) {
        List<FieldError> errors =  bindingResult.getFieldErrors();
        FieldError err = errors.get(0); // Get the first error inm the list
        return err.getDefaultMessage();
     }
  
     User newUser =  userService.saveUser(user);

   if(newUser != null && newUser.getUsid() != null) {
      return "User saved successfully!";  
      
   }

 }catch (Exception ex ){
     //call log provider 
     ex.printStackTrace();
  }
      return "Could nt save user";

  }
 

}

  