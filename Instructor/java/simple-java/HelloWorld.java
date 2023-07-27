import java.util.Scanner;

public class HelloWorld {


    //Method | Function in JS world
    public static void main (String [] args) {

        //System.out.println("Welcome to Java");

        //int results = computeAge();
        String msg = validateMessage();

        System.out.println("message is "+ msg);
       
    }

    public static int computeAge () {

        try (Scanner scanner = new Scanner(System.in)) {
             System.out.println("Enter age1 :");
             int age1 =  Integer.valueOf(scanner.nextLine());
             System.out.println("Enter age2 :");
             int age2 =  Integer.valueOf(scanner.nextLine());

              return age2 - age1;
        } catch (NumberFormatException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return 0;
    }



     public static String validateMessage () {
       
        int age=25;

        if(age < 25){
            return "Somewhat young";
        }else if(age == 25){
            return "yes, getting there";
        }else{
            return "nothing matched";
        }
    }



    
     public static String userNotice (int age, String name, String address) {
            
        
        
        
        return null;
    }





}