/**********************************************************************************************
 * This file contains solutions to phase 5 of Javascript practice questions
 **********************************************************************************************/


/** 1) 
 * Create a function that takes a number as an argument. 
 * Add up all the numbers from 1 to the number you passed to the function. For example, 
 * if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
 * addUp(4) ➞ 10
   addUp(13) ➞ 91
   addUp(600) ➞ 180300
 */

function addUpTo(lastNumber) {
   let sum = 0;  // intialize a sum
   for(let i =1; i <= lastNumber ; i++ ){ //loop through all numbers starting from 1
      //sum += i;
      sum = sum + i; // add the current value to the sum
   }
   return sum;  //return the sum after the loop has completely gone though each number.
}


/** 2)
 * 
 * This challenge will help you interpret mathematical relationships both algebraically and geometrically.

      Matchstick Houses, Steps 1, 2 and 3

      Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

      Examples
      matchHouses(1) ➞ 6

      matchHouses(4) ➞ 21

      matchHouses(87) ➞ 436
      Notes
      Step 0 returns 0 matchsticks.
      The input (step) will always be a non-negative integer.
      Think of the input (step) as the total number of houses that have been connected together.
 * 
 */

      function matchHouses(numberOfHouses) {
         // 1 house = 6 sticks
         // 2 houses =  6 + (6-1)
         // 3 houses =  6 + 5 + 5
         // 4 houses =  6 + 5 + 5 + 5
         if(numberOfHouses === 0){
            return 0;
         }
         return (5*numberOfHouses) + 1;
      }



      /** 3)
       * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

         Examples
         minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

         minMax([2334454, 5]) ➞ [5, 2334454]

         minMax([1]) ➞ [1, 1]
         Notes
         All test arrays will have at least one element and are valid.
       * 
       */


       function minMax(array) {

         //check to see if there are any elements in the array
         if(array.length === 0){
            return [];
         }
         let min = array[0];
         let max = array[0];
         //Loop through the array and find the min and max 
         for(let i=1; i<array.length; i++){
            //determine min number
            if(array[i] < min){
               min = array[i];
            }
            //determine max number
            if(array[i] >  max){
               max = array[i];
            }
         }
         //return min and max numbers as array, starting with the min as first element
         return [min, max]
       }



       /** 4)
        * You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

            Assume that the following array of drink objects needs to be sorted:

            drinks = [
            {name: "lemonade", price: 50},
            {name: "lime", price: 10}
            ]
            The output of the sorted drinks object will be:

            Examples
            sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price:50}]
        * 
        */


            function sortDrinkByPrice(drinks) {

               //use the Javascript compare function to sort drinks by price
               //When using compare function, sorting from a-b ==> ascending and b-a means descending

               const sortedDrinks =  drinks.sort((a, b) => a.price - b.price); // we want to sort price from small - large(a.price - b.price)
              
               console.log(sortedDrinks);
               return sortedDrinks;

            }


            /** 5)
             * 
             * Create a function that takes two arrays and insert the second array in the middle of the first array.

               Examples
               tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

               tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

               tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
               Notes
               The first array always has two elements.
               Try Using the spread syntax to solve this challenge.
             * 
             * 
             */


            function  tuckIn (array1, array2) {

               
               
               //array1 = [3,4], array1.length = 1
               const indexToPutArray =  Math.floor(array1.length/2); // find index where to put all of array2
               array1.splice(indexToPutArray, 0, ...array2); // modify array1 to have all array 2 added to the target location 
               return array1;



               /** Other option
               let newArray = [];

               //put first array of array1
               newArray.push(array1[0])

               //Add all of array2 into new array
                
               newArray.push(...array2);

               //add the last element of arry1
               newArray.push(array1[1])

               return newArray;
               */

            }


         /** 6)
          * Create a function that takes two strings as arguments and returns the number of times the
          *  first string (the single character) is found in the second string.

            Examples
            charCount("a", "edabit") ➞ 1

            charCount("c", "Chamber of secrets") ➞ 1

            charCount("b", "big fat bubble") ➞ 4
            Notes
            Your output must be case-sensitive (see second example).
          */


            function charCount(character, phrase) {
               let numChars = 0;

               //loop through the string anc find matching character
               for(let i=0; i<phrase.length; i++){
                  if(phrase[i] === character ){
                    // numChars = numChars +1;
                     numChars++; //short form
                  }
               }
               return numChars;
            }


          /** 7)
           * Create a function that takes a number as an argument and returns the appropriate error message.
               The input error will be 1 to 5:
               1 >> "Check the fan: e1"
               2 >> "Emergency stop: e2"
               3 >> "Pump Error: e3"
               4 >> "c: e4"
               5 >> "Temperature Sensor Error: e5"
               For any other value, return 101

               Examples
               error(1) ➞ "Check the fan: e1"

               error(2) ➞ "Emergency stop: e2"

               error(3) ➞ "Pump Error: e3"

           * 
           *  */  


          function error(errorCode) {

            if(!errorCode){
               return "Please provide error code";
            }
             switch (errorCode){
               case 1 :
                  return "Check the fan: e1";
               case 2: 
                  return "Emergency stop: e2";
               case 3: 
                  return "Pump Error: e3";
               case 4: 
                  return "c: e4";         
               case 5:
                  return "Temperature Sensor Error: e5";
               default:
                  return "no matching error code"       

             }

          }      


          /** 8)
           * 
           * Create a function that returns an array of strings sorted by length in ascending order.

               Examples
               sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

               sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

               sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

               sortByLength([]) ➞ []
               Notes
               Strings will have unique lengths, so don't worry about comparing two strings with identical length.
               Return an empty array if the input array is empty (see example #4).
           * 
           */

           function sortByLength(array) {
            const sortedArray =  array.sort((a,b) => a.length - b.length);
            return sortedArray;
           }


        /** 9)
         * 
         * Create a function that changes specific words into emoticons. Given a sentence as a string, 
         * replace the words smile, grin, sad and mad with their corresponding emoticons.
            word	emoticon
            smile	:D
            grin	:)
            sad	:(
            mad	:P
            Examples
            emotify("Make me smile") ➞ "Make me :D"

            emotify("Make me grin") ➞ "Make me :)"

            emotify("Make me sad") ➞ "Make me :("
            Notes
            The sentence always starts with "Make me".
         * 
         */

        
        function  emotify(phrase) {
             const emoticons = {
                  smile : ":D",
                  grin : ":)",
                  sad : ":)",
                  mad:  ":P"
             }

             const standaloneWords =  phrase.split(" "); // split each word into array


             const updatedPhrase =  standaloneWords.map( word => emoticons[word] || word); // loop through the arr of words and compare the value to the emoticon JSON constant
            
             return updatedPhrase.join(" "); // add a space between each array and return it.

        }



        /** 10)
         * Create a function that takes a number as an argument and returns the highest digit in that number.

            Examples
            highestDigit(379) ➞ 9

            highestDigit(2) ➞ 2

            highestDigit(377401) ➞ 7
         * 
         * 
         */

        
            function highestDigit (number) {
                let highest = 0;
                while(number > 0) {
                  const remainder = number % 10
                  if(remainder > highest){
                     highest = remainder
                  }
                  number = Math.floor(number/10);
                }
                return highest;
            }

         
