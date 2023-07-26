package Instructor.java.testacessModifiers;

import Instructor.java.oop.Person;

public class Main {




    public static void main(String[] args){

      
        Person myPerson =  new Person();

       // String firstLastName =  myPerson.getFirstAndLastNameOne();

       MyCustomCity city = new MyCustomCity();

       city.setCityName("NYC");
       city.setPopn(200);
       city.setWaterSource("Tap");

       System.out.println(city.toString());


       // public(all files/objects withing the project)  ----> protected(all files within a package) ----> private(all methods withina file) 


    }

    
}
