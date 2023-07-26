package Instructor.java.oop;

public abstract class City {


    private int  popn;
    private String cityName;
    private boolean electrified;
    private String bgColor;
    
    public int getPopn() {
        return popn;
    }
    public void setPopn(int popn) {
        this.popn = popn;
    }
    public String getCityName() {
        return cityName;
    }
    public void setCityName(String cityName) {
        this.cityName = cityName;
    }
    public boolean isElectrified() {
        return electrified;
    }
    public void setElectrified(boolean electrified) {
        this.electrified = electrified;
    }
    public String getBgColor() {
        return bgColor;
    }
    public void setBgColor(String bgColor) {
        this.bgColor = bgColor;
    }
    @Override
    public String toString() {
        return "City [popn=" + popn + ", cityName=" + cityName + ", electrified=" + electrified + ", bgColor=" + bgColor
                + "]";
    } 

    



    


    
}
