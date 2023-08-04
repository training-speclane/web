package com.dummy.demo.validations;


import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.dummy.demo.entity.User;

public class UserValidation implements Validator  {

    @Override
    public boolean supports(Class<?> clazz) {
        return User.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {

        User user = (User)target;
       
       // ValidationUtils.rejectIfEmpty(errors, "firstName","notEmpty", "First name cannot be empty.");

        if(user.getFirstName() != null && user.getEmail().length() > 10){
           errors.rejectValue("firstName", "fieldLength", "First name cannot be more than 10 characters");
        }


        



       
       
       
    }
    
}
