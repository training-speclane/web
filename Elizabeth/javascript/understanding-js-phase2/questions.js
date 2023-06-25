/************************************************************************
 * This is exercise phase 2 of JS practice
 * This is an external file that contains all the functions that we need
 *************************************************************************/



/**
Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
Examples
makesTen(9, 10) ➞ true
makesTen(9, 9) ➞ false
makesTen(1, 9) ➞ true
Notes
Don't forget to return the result.
 */

function checkFor10(a, b) {
    const sum = a + b;
    if ((a === 10 || b == 10) || sum === 10) {
        return true;
    }
    return false;
}



/*
Given two arguments, return an array which contains these two arguments.
Examples
makePair(1, 2) ➞ [1, 2]
makePair(51, 21) ➞ [51, 21]
makePair(512124, 215) ➞ [512124, 215]
*/


function returnArray(a, b) {
    let arr = [];
    arr.push(a)
    arr.push(b);
    console.log(arr);

    return [a, b]
}


/**
 * 3. Compare Strings by Count of Characters
    Create a function that takes two strings as arguments and return either true or false depending on whether the total number
     of characters in the first string is equal to the total number of characters in the second string.

    Examples
    comp("AB", "CD") ➞ true

    comp("ABC", "DE") ➞ false

    comp("hello", "edabit") ➞ false
    Notes
    Don't forget to return the result.
 */



function compareCharcters(word1, word2) {

    if (word1.length === word2.length) {
        return true;
    }

    return false;
}


/**
 * Create a function that returns true if a string is empty and false otherwise.

    Examples
    isEmpty("") ➞ true

    isEmpty(" ") ➞ false

    isEmpty("a") ➞ false
    Notes
    A string containing only whitespaces " " does not count as empty.
    Don't forget to return the result
 */


function isEmpty(string) {
    //! = NOT
    if (!string) {
        return true;
    }
    return false;
}


/**
 * 5. Return a String as an Integer
    Create a function that takes a string and returns it as an integer.

    Examples
    stringInt("6") ➞ 6

    stringInt("1000") ➞ 1000

    stringInt("12") ➞ 12
    Notes
    All numbers will be whole.
    All numbers will be positive.
 */


function converToInt(string) {
    return parseInt(string);
}


/**
 * Given two strings, firstName and lastName, return a single string in the format "last, first".

    Examples
    concatName("First", "Last") ➞ "Last, First"

    concatName("John", "Doe") ➞ "Doe, John"

    concatName("Mary", "Jane") ➞ "Jane, Mary"
    Notes
    Don't forget to return the result.
 */




function returnLastFirst(first, last) {
    const nameComination = last + " " + first;
    //concat just means + (PLUS)
    // const nameComination =  last.concat(" ").conact(first);
    return nameComination;
}

/**
 * Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed.
 *  This is calculated by subtracting the number of downvotes from upvotes.

    Examples
    getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

    getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

    getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
    Notes
    You can expect only positive integers for vote counts.
 */


function computeVotes(votes) {
    const likes = votes.upvotes;
    const dislikes = votes.downvotes;
    const totalVotes = likes - dislikes;
    return totalVotes;
}



/**
 *    Write a function to reverse an array.

        Examples
        reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

        reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

        reverse([]) ➞ []
        Notes
        Don't forget to return the result.
 */


function reverseArray(arr) {
    return arr.reverse();
}


/**
 * Write a function that checks whether a person can watch an MA15+ rated movie.
 *  One of the following two conditions is required for admittance:

    The person is at least 15 years old.
    They have parental supervision.
    The function accepts two parameters, age and isSupervised. Return a boolean.

    Examples
    acceptIntoMovie(14, true) ➞ true

    acceptIntoMovie(14, false) ➞ false

    acceptIntoMovie(16, false) ➞ true
    Notes
    age is a decimal.
    isSupervised is a boolean.
 */


function canWatchMovie(age, isSupervised) {
    if (age >= 15 && isSupervised) {
        return true;
    }
    return false;
}

/**
 * A bartender is writing a simple program to determine whether he should serve drinks to someone. 
 * He only serves drinks to people 18 and older and when he's not on break.

    Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

    Examples
    shouldServeDrinks(17, true) ➞ false

    shouldServeDrinks(19, false) ➞ true

    shouldServeDrinks(30, true) ➞ false
    Notes
    Return true or false.
    Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.
        */


function shouldServeDrinks(age, onBreak) {

    console.log(age, onBreak);

    if (age >= 18 && !onBreak) {
        return true;
    }
    return false;

}

/**
 * Scientists have discovered that in four decades, the world will EXPLODE! It will also 
 * take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

    You must calculate the number of people there will be in three decades from now.

    The variable population is the world population now.
    Assume that every month, someone gives birth to more people n.
    Return the number of people there will be when the spaceship is complete.

    futurePeople(256, 2) ➞ 976
    futurePeople(3248, 6) ➞ 5408
    futurePeople(5240, 3) ➞ 6320
 */


function numberOfPeople(population, monthlyBirths) {
    //10 years = 1 decade
    //12 months =  1 year

    const BirthIn1yr = 12 * monthlyBirths;
    const birthIn10yrs = 10 * BirthIn1yr;
    const popIn3decades = birthIn10yrs * 3;

    return population + popIn3decades;

}



/**
 * Write a template string according to the following example:

    Example
    const a = "John";
    const b = "Joe";
    const c = "Jack";
    const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."
    Tips
    A template string is a string that uses a Dollar sign and curly braces inside backticks ${} as a placeholder that can then be formatted:

    const name = John;
    `hello, my name is ${name}.` ➞ "hello, my name is John."
    You can put an expression inside the curly braces :

    const age = 12;
    `Hello, you are ${age < 18 ? 'young' : 'old'}.` ➞ "Hello, you are young."
 */


function templateString(string, content) {
    const newString = content.replaceAll("${}", string);
    return newString;
}



/**
 * Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.

    Info
    The ternary operator (sometimes called Conditional Expressions) in JavaScript is an alternative to the if... else... statement.

    It is written in the format:

    condition ? result_if_true : result_if_false
    Ternary operators are often more compact than multi-line if statements, and are useful for simple conditional tests.

    For example:

    is_nice = true

    // Using ternary operator.
    state = is_nice ? "nice" : "not nice"

    // Equivalent code using multi-line if statements.
    if (is_nice)
    state = "nice"
    else
    state = "not nice"
    

    Examples
    yeah_nope(true) ➞ "yeah"

    yeah_nope(false) ➞ "nope"
 */


function checkTernaryOp(myBool) {
    let returnVal;

    myBool === true ? returnVal = 'yeah' : returnVal = 'nope';

    //   if(myBool === true){
    //      returnVal = 'yeah'
    //   }else{
    //     returnVal = 'nope'
    //   }

    return returnVal;
}



/**
 * Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet
 */


function convertToFt(valueInInches) {


    const valueInFt = valueInInches / 12

    return valueInFt.toFixed(2); // 2 decimal places

}


/**
 * Create a function that accepts an array and returns the last item in the array.

    Examples
    getLastItem([1, 2, 3]) ➞ 3

    getLastItem(["cat", "dog", "duck"]) ➞ "duck"

    getLastItem([true, false, true]) ➞ true
 */



function lastElementInArray(array) {

    const lastElement = array[array.length - 1];

    return lastElement;

}