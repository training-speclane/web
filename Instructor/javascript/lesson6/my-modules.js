
import { getTodaysDate } from "./module-2.js";


/**
 * 
 * 10) A typical car can hold four passengers and one driver, allowing five people to travel around. 
 * Given n number of people, return how many cars are needed to seat everyone comfortably.
 * 
    Examples
    carsNeeded(5) ➞ 1
    carsNeeded(11) ➞ 3
    carsNeeded(0) ➞ 0
    Notes
    It's likely there will be a few people left over and some cars won't be filled to max capacity.
 */



    export function carsNeeded(numberOfPeople){

        let numCars =  numberOfPeople/5; //We will need the WHole number, not the fraction or decimal
            numCars = parseInt(numCars);
            const  remainingPeople  =    numberOfPeople % 5; 
            const additionalNumCars =    remainingPeople !== 0 ? 1 : 0;

        const totalNumCars =  Number(numCars) +  Number(additionalNumCars);
        return totalNumCars;
    }



    /**
     * Create a function that returns true if a string contains any spaces.

        Examples
        hasSpaces("hello") ➞ false

        hasSpaces("hello, world") ➞ true

        hasSpaces(" ") ➞ true

        hasSpaces("") ➞ false

        hasSpaces(",./!@#") ➞ false
        Notes
        An empty string does not contain any spaces.
     */


        export function hasSpaces(string){

          // Option 1:  return string.includes(" ");

           //option 2: const returnValue =  string.indexOf(" ") >= 0 ? true : false
           // return returnValue;
                

            const today = getTodaysDate(); // function form another JS file, using modules

          return  string + today;
        }