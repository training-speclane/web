package Instructor.java.oop;


//package Instructor.java.oop; //PACKAGE DEFININTION
import java.util.List;  //IMPORT STATEMENTS

import Instructor.java.oop.Person;


public class SimpleJavaClass {  //CLASS DECALRATION


    //DEFINE CLASS VARIABLES

    
  String firstName = "John";
  String lastName = "Doe";
  int age = 25;





    public static void main(String [] args){

       
        Person personInfo =  new Person();

        personInfo.setAge(45);
        personInfo.setFirstName("John");


        System.out.println(personInfo.toString());

    }


    public int  computeAge() {
        return 0;
    }

    public String  displayMessage() {
        System.out.println(age);
        return "0";
    }



    //CONSTRUCTOR
    
}
