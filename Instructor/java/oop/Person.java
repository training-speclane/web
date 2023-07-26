package Instructor.java.oop;

public class Person {


    //members or properties
private String firstName; 
private String lastName;
private int age;
private double height;


public String getFirstName() {
    return firstName;
}
public void setFirstName(String firstName) {
    this.firstName = firstName;
}
public String getLastName() {
    return lastName;
}
public void setLastName(String lastName) {
    this.lastName = lastName;
}
public int getAge() {
    return age;
}
public void setAge(int age) {
    this.age = age;
}
public double getHeight() {
    return height;
}
public void setHeight(double height) {
    this.height = height;
}
@Override
public String toString() {
    return "Person [firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + ", height=" + height + "]";
}


public String getFirstAndLastNameOne () {
    return firstName + " " + lastName;

}

public String getFirstAndLastNameTwo () {
    return firstName + " " + lastName;

}





}
