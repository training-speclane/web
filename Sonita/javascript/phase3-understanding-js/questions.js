/*************************************************
*jS practice, phase 3
************************************************/


/*1. Find Out the Leap Year
A leap year happens every four years, so it's a year that is perfectly divisible by four. 
However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

Write a function that determines if the year is a leap year or not.

Examples
leapYear(2020) ➞ true

leapYear(2021) ➞ false

leapYear(1968) ➞ true */

            function leapYear(year) {
                if (year % 4 === 0) {
                if (year % 100 === 0) {
                    if (year % 400 === 0) {
                    return true;
                    } else {
                    return false;
                    }
                } else {
                    return true;
                }
                } else {
                return false;
                }
            }

/***********************************************************************************************************************
   * 
   ***********************************************************************************************************************/
  
 /* 2. Word without First Character
  Create a function that takes a word and returns the new word without including the first character.
  
  Examples
  newWord("apple") ➞ "pple"
  
  newWord("cherry") ➞ "herry"
  
  newWord("plum") ➞ "lum"
  Notes
  The input is always a valid word.*/

                function word(newWord) {
                    return newWord.slice(1);
                }
                ////////
                function newWord(word) {
                    return word.substring(1);
                }
                console.log(newWord("apple"));
  /***********************************************************************************************************************
   * 
   ***********************************************************************************************************************/              

  /* 3. Name Greeting!
Create a function that takes a name and returns a greeting in the form of a string.

Examples
helloName("Gerald") ➞ "Hello Gerald!"

helloName("Tiffany") ➞ "Hello Tiffany!"

helloName("Ed") ➞ "Hello Ed!"
Notes
The input is always a name (as string).
Don't forget the exclamation mark!  */
                function helloName(content, name){
                    const newString= name.replaceAll("${}", content);
                    return newString;
                }           
            /////////// ORRRR
            function greet(name) {
               return "Hello, " + name + "!";
              }

   /***********************************************************************************************************************
   * 
   ***********************************************************************************************************************/           
/*4. Word Numbers!
Create a function that returns a number, based on the string provided. Here is a list of all digits:

String	Number
"one"	1
"two"	2
"three"	3
"four"	4
"five"	5
"six"	6
"seven"	7
"eight"	8
"nine"	9
"zero"	0
Examples
word("one") ➞ 1

word("two") ➞ 2

word("nine") ➞ 9
Notes
All numbers will be single digit positive integers.*/

            function word(s) {
                const numberMap = {
                "one": 1,
                "two": 2,
                "three": 3,
                "four": 4,
                "five": 5,
                "six": 6,
                "seven": 7,
                "eight": 8,
                "nine": 9,
                "zero": 0
                };
            
                return numberMap[s];
            }
            
            // Example usage:
            console.log(word("one"));   // Output: 1
            console.log(word("two"));   // Output: 2
            //In JavaScript, you can use an object (numberMap) to map the strings to their corresponding numbers. 
            //The word function takes a string as an argument and uses the object to retrieve the associated number.

            //OORR
            function convertWordsToNumbers (word) {

                switch(word){
                    case "zero" : 
                       return 0;
                    case "one":
                       return 1;
                    case "two":
                       return 2
                    case "three" : 
                       return 3;
                    case "four":
                       return 4;
                    case "five":
                       return 5
                    case "six" : 
                       return 6;
                    case "seven":
                       return 7;
                    case "eight":
                       return 8
                    case "nine" : 
                       return 9;
                    default:
                       return 1000000;
            
                }
            }

  /***********************************************************************************************************************
   * 
   ***********************************************************************************************************************/

 /* 5. Check if an Array Contains a Given Number
Write a function to check if an array contains a particular number.

Examples
check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false

check([5, 5, 5, 6], 5) ➞ true

check([], 5) ➞ false
Notes
Don't forget to return the result.*/
                function check(arr, num) {
                    return arr.includes(num);
                }
                console.log(check([1, 2, 3, 4, 5], 3));      // Output: true
                console.log(check([1, 1, 2, 1, 1], 3));      // Output: false
 
                //The check function uses the includes method of arrays to determine if the given number is present in the array. 
                //It returns true if the number is found and false otherwise.

                //OOR
                function hasTargetElement (arr, target){
          
                    //APROACH 1 =
                //     if( arr.includes(target)){
                //         return true;
                //     }
                //    return false;
        
                 //APproach #2: Use loop
                   for(i=0; i < arr.length; i++ ){
                       if(arr[i] === target) {
                          return true;
                       }
                   }
                   return false;
                }
/******************************************************************************************************************************
 * 
 * *******************************************************************************************************************************/
/*6. Profitable Gamble
Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

Examples
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true
Notes
A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: 
net_outcome = probability_of_winning * prize - cost_of_playing.*/

            function profitableGamble(prob, prize, pay){
                if(prob * prize > pay){
                    return true;
                }else{
                    return false
                }
            }
/******************************************************************************************************************
 * 
 *****************************************************************************************************************/
/*7. Boolean to String Conversion
Create a function that takes a boolean variable flag and returns it as a string.

Examples
boolToString(true) ➞ "true"

boolToString(false) ➞ "false"
Notes
Don't forget to return the result.*/
                function boolToString(flag){
                    return flag.toString();
                }
                //In JavaScript, you can use the toString() method to convert a boolean value to its string representation.


/******************************************************************************************************************
 * 
 *****************************************************************************************************************/
/*8. Pair Management
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215]*/
                    function pairManagement(num1, num2){
                    return [num1, num2]

                    }
  
  
/******************************************************************************************************************
 * 
 *****************************************************************************************************************/

/*9. Compare Strings by Count of Characters
Create a function that takes two strings as arguments and return either true or false depending on
 whether the total number of characters in the first string is equal to the total number of characters in the second string.

Examples
comp("AB", "CD") ➞ true

comp("ABC", "DE") ➞ false

comp("hello", "edabit") ➞ false
Notes
Don't forget to return the result.*/
                function stringCounts(string1, string2){
                    if(string1.length===string2.length){
                        return true;
                    }else{
                        return false
                    }
                }
  /******************************************************************************************************************
 * 
 *****************************************************************************************************************/
  
/*10. Four Passengers and a Driver
A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, 
return how many cars are needed to seat everyone comfortably.

Examples
carsNeeded(5) ➞ 1

carsNeeded(11) ➞ 3

carsNeeded(0) ➞ 0
Notes
It's likely there will be a few people left over and some cars won't be filled to max capacity.*/
              function carsNeeded(people){
                const peoplePerCar=4;
                const carCapacity = peoplePerCar + 1;
                const cars =people / carCapacity;
                return cars
              }
/******************************************************************************************************************
 * 
 *****************************************************************************************************************/

    /*11. Check String for Spaces
Create a function that returns true if a string contains any spaces.

Examples
hasSpaces("hello") ➞ false

hasSpaces("hello, world") ➞ true

hasSpaces(" ") ➞ true

hasSpaces("") ➞ false

hasSpaces(",./!@#") ➞ false
Notes
An empty string does not contain any spaces. */
function doesStribgContainSpace(str){
    return str.includes(" ")
}       