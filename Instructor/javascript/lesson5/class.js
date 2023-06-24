
class Person  {
  
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    getFirstName () {
         return this.firstName;
    }

    getLastName () {
        return this.lastName;
    }

    getAge () {
        return this.age;
    }


    getFullName (midleName) {
        return this.firstName + " " +  this.lastName + " " + midleName;
    }
}


class House {

     constructor (paint, size, roof, floor) {
         
        this.paint = paint;
        this.size = size;
        this.roof = roof;
        this.floor = floor;
     }


        getNewHouse (address) {

            const houseProps =  "Your house is located at " + address + "and will have the following propertis"; 

            return houseProps;
        }

     }


