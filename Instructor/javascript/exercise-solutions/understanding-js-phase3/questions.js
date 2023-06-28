/************************************************************************
 * This is exercise phase 3 of JS practice
 * This is an external file that contains all the functions that we need
 *************************************************************************/

/**
 * 
 * A leap year happens every four years, so it's a year that is perfectly divisible by four. However, 
 * if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

Write a function that determines if the year is a leap year or not.

Examples
leapYear(2000) ➞ true

leapYear(2021) ➞ false

leapYear(1968) ➞ true
 */

function isLeapYear (year) {

    const remainderDivideBy4 =  year % 4;
    let isMultiple100 = false;
    const remainderDivideBy100 =  year%100;
    const remainderDivideBy400 =  year%400;

    if(remainderDivideBy100 === 0 && remainderDivideBy400 === 0){
        isMultiple100 = true;
    }
    if(remainderDivideBy4 === 0){
        return true;
    }else if (remainderDivideBy100 === 0 &&  remainderDivideBy400 === 0 ){
        return true;
    }else{
        return false;
    }
}


/**
 * Create a function that takes a word and returns the new word without including the first character.

Examples
newWord("apple") ➞ "pple"

newWord("cherry") ➞ "herry"

newWord("plum") ➞ "lum"
Notes
The input is always a valid word.
 */


function returnWithoutFirstChar (word) {

    const removedFirstChar =  word.slice(1);

    return removedFirstChar;
}


/**
 * 3. Name Greeting!
Create a function that takes a name and returns a greeting in the form of a string.

Examples
helloName("Gerald") ➞ "Hello Gerald!"

helloName("Tiffany") ➞ "Hello Tiffany!"

helloName("Ed") ➞ "Hello Ed!"
Notes
The input is always a name (as string).
Don't forget the exclamation mark!
 */


function greeting (name) {

    return "Hello" + " " + name;
}



/**
 * Create a function that returns a number, based on the string provided. Here is a list of all digits:

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
 */


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


/**
 * Write a function to check if an array contains a particular number.

        Examples
        check([1, 2, 3, 4, 5], 3) ➞ true

        check([1, 1, 2, 1, 1], 3) ➞ false

        check([5, 5, 5, 6], 5) ➞ true

        check([], 5) ➞ false
        Notes
        Don't forget to return the result.


 */


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
