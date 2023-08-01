package com.dummy.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dummy.demo.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

    User findByFirstName(String firstName);
    
}
