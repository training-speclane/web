 

     import Elizabeth.java.oop.Person;

     public class Main {
        public static void main(String[] args){

            Person myPerson = new Person();

           // String firstLastNane = myPerson.getFirstAndLastNameOne();
           MyCustomCity city = new MyCustomCity();

           city.setCityName("NYC");
           city.setPopn(200);
           city.setWaterSource("Tap"); 

           System.out.println(city.toString());

           // public(all files/ojects within the project) -----> protegted(all files within a project) ------> private(all methods within a file )
        }
    
}
