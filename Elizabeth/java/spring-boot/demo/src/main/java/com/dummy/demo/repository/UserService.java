
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.service;

 import com.dummy.demo.entity.User;
 import com.dummy.demo.repository.UserRepository;

 @service


 public class UserService {

    @Autowired
    private UserRepository repo;
    
    public User savUser(string firstName ){
        return repo.findFirstName(firstName);
    }

    public User findFirstName(User user){
        return repo.saveAndFlush(user);
    }
    
}
