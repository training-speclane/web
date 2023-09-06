 package Elizabeth.java.oop;

 //package Elizabeth .java .oop; //PACKAGE DEFININTION
 import java.util.List; //IMPORT STATEMENT

 import Elizabeth.java.oop.Person;
 
 public class SimpleJavaClass { //CLASS DECALRATION

    //DEFINE CLASS VARIABLES
 int age = 25;
 String firstName ="john";
 String lastName ="Doe";


    public static void main(String [] args){

        Person personInfo = new Person();

        personInfo.setAge(45);
        personInfo.setFirstName("John");

         System.out.printIn(personInfo.toString());
        
    }
    public int computeAge(){

        return 0;
    }

    public String displayMessage(){

       System.out.println(age);
        return "0";
    }


    //CONSTRUCTOR
    
}
