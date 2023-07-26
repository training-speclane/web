/*****************************************************************
 * This is solution to phase 4 of JavaScript  practice. 
 ****************************************************************/


/*
1)
 
Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
name
population
continent
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

Examples
cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

*/


function cityFacts (cityObject) {


   if(cityObject){
         const returnText =  `<strong>${cityObject.name}</strong> has a population of <strong>${cityObject.population}</strong> and is situated in <strong>${cityObject.continent}</strong>`;
        // const returnText =  cityObject.name + "has a population of " +cityObject.population+ " and is situated in " + cityObject.continent;
         //const returnText =  cityObject.name.concat("has a population of ").concat(cityObject.population).concat(" and is situated in ").concat(cityObject.continent);

         return returnText;
   }

   return "Please provide city object containg name, population and continent"

}

/* 2)
 
 Create a function that takes in a current mood and return a sentence in the following format:
  "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

   Examples
   moodToday("happy") ➞ "Today, I am feeling happy"

   moodToday("sad") ➞ "Today, I am feeling sad"

   moodToday() ➞ "Today, I am feeling neutral"

*/


function moodToday (mood) {

   return `Today, I am feeling ${mood ? mood : 'neutral'}`; // : is the else statement
}



/*
  3)
 Create a function that takes an array with numbers and return an array with the elements multiplied by two.

Examples
getMultipliedArr([2, 5, 3 ]) ➞ [4, 10, 6] -> [2, 3, 5]

getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

*/


function getMultipliedArr (array) {

   let newArray = []; //Create a final array that would contain our list of multiplied elements
    
    for(let k = 0; k < array.length; k++) {  //K is a variable, think of it as a counter or index of the target element

       const currentElement = array[k]; // The current element.

       const elementMultipleOfTwo =  currentElement * 2; // Take action on the current element

       newArray.push(elementMultipleOfTwo) // Add the newly modified element to our new list
    }

    return newArray; // return the new list

}



/**
 *  4)

function sortWord(word) {
    return word.sorts().to_s;
}

A student learning JavaScript was trying to make a function that sorts all the letters of a word, but their code is broken, and they can't figure out why.

Spot and fix the error(s) in the code to make the function work.

Examples
sortWord("dcba") ➞ "abcd"

sortWord("Unpredictable") ➞ "Uabcdeeilnprt"

sortWord("pneumonoultramicroscopicsilicovolcanoconiosis") ➞ "aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv"
 */


 function sortWord (word) {
   const arrayOfLetters =  word.split("");
   return arrayOfLetters.sort();
 }



 /** 5)
  * A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.

   Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.

   Examples
   journeyDistance(3) ➞ 1
   // The first kilometer costs $3

   journeyDistance(9) ➞ 4
   // The first kilometer costs $3 plus the other three kilometers (costing $2 each)

   journeyDistance(5) ➞ 2
  * 
  * 
  */

   function journeyDistance(cost) {

         if (cost <= 3) {
            return cost/3;
         } else {
            return parseInt((cost - 3) / 2) + 1;
         }

         //ALTERNATE UNIVERSE
         // Calculate for first 3KM
        // const balanceAfterFirstKM = cost - 3;
        // const remainingKM =  balanceAfterFirstKM/2;

         //const totalKM =  remainingKM +1;
        //return totalKM;

   }




   /**
    * 6)
    * Create a function that counts how many D's are in a sentence.
      Examples
      countDs("My friend Dylan got distracted in school.") ➞ 4

      countDs("Debris was scattered all over the yard.") ➞ 3

      countDs("The rodents hibernated in their den.") ➞ 
    */


     function countDs(string) {

      const lowerCaseString =  string.toLowerCase();

       //Option 1
       //Split the string into an array
       //const newArray =  lowerCaseString.split("d").length - 1;
      // return newArray;
       //Option 2
       //Use Regular expressions
       return  lowerCaseString.match(/d/g||[]).length;  ///d/g||[] is a regular expession REGEX;

     }



     /** 7)
      * 
      * Create a function that takes an array and returns the sum of all numbers in the array.
      *  getSumOfItems([2, 7, 4, 10, 600]) ➞ 13

         getSumOfItems([45, 3, 0]) ➞ 48

         getSumOfItems([-2, 84, 23]) ➞ 105
      */
   
      function getSumOfItems (array) {

         let sum = 0; //45 

         for(let i=0; i < array.length; i++){
            
            //round1 sum =  sum(0) +  array[0](45) = 45;
            //round2 sum =  sum(45) + array[1](3) =  48;
            //round3 sum = sum(48) + array[2](0) = 48;

            //sum += array[i];
             sum =  sum + array[i];
         }
         return sum;
      }



      /** 8)
       *  Given an array of integers, determine whether the sum of its elements is even or odd.

         The return value should be a string ("odd" or "even").

         If the input array is empty, consider it as an array with a zero ([0]).

         Examples
         evenOrOdd([0]) ➞ "even"

         evenOrOdd([1, 9]) ➞ "even"

         evenOrOdd([8,3,1,7]) ➞ "odd"

         evenOrOdd([0, 1, 5]) ➞ "even"
       * 
       */


      function evenOrOdd (array) {
        const sum =  getSumOfItems(array);
        const remainder =  sum%2;

        //return remainder === 0 ? 'even' : 'odd';
        if( remainder === 0){
         return "even";
        }
        return "odd";
      }



      /**
       * Create a function that returns the selected filename from a path. Include the extension in your answer.

         Examples
         getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

         getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

         getFilename("ffprobe.exe") ➞ "ffprobe.exe"
       * 
       */

     function getFilename(file) {
         //check if the file has a forward slash
         if(file.indexOf("/") < 0) {
            return file;
         }
         //Step 1: cut the string(file name at the last occurence of "/")
         const locationOfLastSlash = file.lastIndexOf("/"); //This will tell us the location/index of the last forward slash

         //Step2: Now that we know location of the last slash, we just need to cut this string at that position
         const results =  file.slice(locationOfLastSlash+1);
         return results;
     }


     /** 10)
      * Given an array, rotate the values clockwise by one (the last value is sent to the first position).

         Check the examples for a better understanding.

         Examples
         rotateByOne([1, 2, 3, 4]) ➞ [5, 1, 2, 3, 4]

         rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

         rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]
      */

      function  rotateByOne (array){
         
         //Take the last element and let it be first in the new array list, return that new list

         //OPTION1
         let newArray = [];
         const lastElement = array[array.length-1]; //find the last element 
         newArray.push(lastElement); //add the last element to our new array
         array.pop(); // remove the last element from our array
         newArray.push(...array); //... Means spread operator/everything , essentially add everything/every element  inside of 'array' to 'newArray'
        
         return newArray;


         //OPTION 2
         //array.ushift(array.pop())
         //return array;


      }


      /** 11)
       *  Many IDS (for emails or Google ID) are created using the person's name.

         Create a function that will return a four-character ID using the person's first name and last name. 
         The first character will be the first letter of the first name but in lowercase. 
         The next three characters will be the first three characters of the last name,
          but the first letter will be capitalized and the other two will be in lower case.

         Examples
         createID("maryJane", "lambert") ➞ "mLam"

         createID("John", "SMITH") ➞ "jSmi"

         createID("mary", "smith") ➞ "mSmi"
       * 
       */

         function  createID (firstName, lastName) {

            const firstChar = firstName.charAt(0).toLowerCase(); // Convert first character tolower case
            const last3chars = lastName.substr(0,3).toLowerCase(); // get the first 3 chars of lastname and convert ALL of them to lower case 

            // grab the first char of the lastname and convert to uppercase. The remianing 2 should be 
            //lowercases that we already converted above. 
            const nameId =  firstChar + last3chars.charAt(0).toUpperCase() +  last3chars.substr(1);

            return nameId;

         }


         /** 12)
          * Write a function that takes the last number of a consecutive list of numbers and returns the total 
          * of all numbers up to and including it.
          * 
          * Examples
            addUpTo(3) ➞ 6
            // 1 + 2 + 3 = 6

            addUpTo(100) ➞ 55
            // 1 + 2 + 3 + ... + 100 = 55

            addUpTo(7) ➞ 28
            // 1 + 2 + 3 + ... + 7 = 28
            Notes
               You will only be given valid inputs.
               There are various ways of doing this; try finding them!
               Remember to return the result.
          * 
          */

         
         function addUpTo(lastNumber) {
            let sum = 0;  // intialize a sum
            for(let i =1; i <= lastNumber ; i++ ){ //loop through all numbers starting from 1
               //sum += i;
               sum = sum + i; // add the current value to the sum
            }
            return sum;  //return the sum after the loop has completely gone though each number.
         }



         /** 13)
          * Given a set containing an element, return the sole element.
          * Examples
            const first = new Set();
            first.add(1); 
            elementSet(first) ➞ 1

            const second = new Set();
            second.add("apple"); 
            elementSet(second) ➞ "apple"

            const third  = new Set();
            third.add(false); 
            elementSet(third) ➞ false
          */

         function elementSet (set) {
            //loop through the set and return the 1 element inside of it.
             for(let element of set) {
               return element;
             }
         }


         /** 14)
          * 
          * Create a function that takes an array of strings and numbers, and filters out the array so 
          * that it returns an array of integers only.

            Examples
            filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

            filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

            filterArray(["Nothing", "here"]) ➞ []
          * 
          */


         function  filterArray(array) {
            let numbersOnlyArray = []; // create an array that would hold ONLY numbers
            for(let i=0; i<array.length; i++){ //Loop through all elements and select just numbers
               if(typeof array[i] === 'number'){ // Check if the element is a number type
                  numbersOnlyArray.push(array[i]); // once an element is a number, push/add it to our numbers only array
               }
            }
            return numbersOnlyArray; // When the loop is complete, return the new array of numbers only
         }



         /** 15)
          * Create a function that takes two arguments of an array of numbers arr and a constant 
          * number n and returns the n largest numbers from the given array.

            Examples
            largestNumbers(2, [4, 3, 2, 1]) ➞ [3, 4] 

            largestNumbers(1, [7, 19, 4, 2]) ➞ [19] --> [2, 4, 7, 19]

            largestNumbers(3, [14, 12, 57, 11, 18, 16]) ➞ [16, 18, 57]

            largestNumbers(0, [1, 3, 4, 2]) ➞ []

            Notes
           The returned array must be sorted in ascending order.
          * 
          */

           function largestNumbers(n, array) {
           
            //step 1 : Sort the array
              const sortedArray =  array.sort((a,b) => a - b);
              //[4, 3, 2, 1] ---> [1, 2, 3, 4]
            //Step2 : cut the array at location of n, but backwards since we have sorted the arry in asc order.  
            //sortedArray.slice(n) ---> [1, 2]
            //sortedArray.slice(-n) ---> [3, 4]
            
            return sortedArray.slice(-n);
           }

       
 


