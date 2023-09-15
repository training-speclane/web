
 package com.dummy.demo.Controller;
 
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.RestController;

 import com.dummy.demo.entity.User;


 @RestController

 public class Appcontroller {
 
    @GetMapping("/get-app")
  public String getApp () {
    return "Hello";
  }



  
  @CrossOrigin(origins = "http://localhost:3000")
  
  @GetMapping("/get-user-info")
  public User getUserInfo () {
    User user = new User();
    user.setCity("NYC");
    user.setCountry("USA");
    user.setFirstName("John");
    user.setLastName("Doe");
    user.setStreetName("5th avn");
    user.setDob("7/27/2023");
    
    return user;
  }
 

  
  
   
      
   }

 
 



  