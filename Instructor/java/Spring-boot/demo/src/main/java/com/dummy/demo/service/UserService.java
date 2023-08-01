package com.dummy.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dummy.demo.entity.User;
import com.dummy.demo.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User findByFirstName(String firstName) {
        return repo.findByFirstName(firstName);

    }

    
}
