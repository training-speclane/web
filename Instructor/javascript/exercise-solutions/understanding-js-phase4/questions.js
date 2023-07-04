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



       
 


