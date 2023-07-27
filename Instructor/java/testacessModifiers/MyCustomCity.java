package Instructor.java.testacessModifiers;

import Instructor.java.oop.City;

public class MyCustomCity extends City{


    private String numLakes;
    private String waterSource;
    public String getNumLakes() {
        return numLakes;
    }
    public void setNumLakes(String numLakes) {
        this.numLakes = numLakes;
    }
    public String getWaterSource() {
        return waterSource;
    }
    public void setWaterSource(String waterSource) {
        this.waterSource = waterSource;
    }
    @Override
    public String toString() {
        return "MyCustomCity [numLakes=" + numLakes + ", waterSource=" + waterSource + " ]" +  "City [popn=" + getPopn() + ", cityName=" + getCityName()  + ", bgColor=" + getBgColor()
        + "]";
    }

    //Already exist in City, since I have extended the use of it 
    // private int  popn;
    // private String cityName;
    // private boolean electrified;
    // private String bgColor;


    


    
}
