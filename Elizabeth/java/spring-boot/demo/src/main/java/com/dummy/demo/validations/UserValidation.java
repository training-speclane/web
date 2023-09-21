 

  import org.springframwork.validation.Errors;
  import org.springframework.validations.ValidationUtils;
 import org.springframwork.validations.Validator;

 import com.dummy.demo.entity.User;
  
 public class UserValidation implements Validator {

    @Override
    public boolean supports(Class<?> clazz){


        return User.class.isAssignableFrom(clazz);

        
    }
    @Override
    public void validate(Object target, Errors errors){
        User user =(User)target;

      // ValidationUtils.rejectIfEmpty(errors,"firstName","notEmpty","first name cannot be empty")
         
   
           if(user.getFirstName() != null && user.getEmail().length() > 10 ){
            errors.rejectValue("firstName","fieldLength","first name can not be more than 10 characters");
           }

        
    

 }
}
