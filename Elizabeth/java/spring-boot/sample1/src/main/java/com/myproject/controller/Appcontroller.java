
 
 @RestController //Request and response should be JSON
 public class Appcontroller {
 

    @GetMapping("/test")
  public String CheckApplication ()  {

     return "This is a string";

  }
    
}
