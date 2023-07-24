/*-- 1. Extract City Facts
Create a function that takes an object as an argument and returns a string with facts
 about the city. The city facts will need to be extracted from the object's three properties:

name
population
// continent
// The string should have the following format: X has a population of Y and is 
// situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// Examples
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
// Notes
// Don't add a period at the end. -->*/

function cityFacts(city) {
  let name = city.name;
  let population = city.population;
  let continent = city.continent;
  return (
    name + "has a population" + population + "and is situated in" + continent
  );
}

function cityFacts(city) {
  let name = city.name;
  let population = city.population;
  let continent = city.continent;
  return (
    name + "has a population of" + population + "is siyuates in" + continent
  );
}

// Ques 2
function moodToday(mood) {
  `Today, i am feelin ${mood ? mood : `neutral`}`;
  //: means else
}
function getMultipliedArr(array) {
  let newArray = [];
  //[]- this is where our new result will be place
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    // i can be anything, eg count,k or what ever, be it should be thesame every where you have i
    const multipliedEle = currentElement * 2;
    newArray.push(multipliedEle);
    //we add the multiplied results into the new array using `push`
  }
  return newArray;
}

//Ques 4
/*******************************************************************
 * function sortWord(word) {
    return word.sorts().to_s;
}

A student learning JavaScript was trying to make a function 
that sorts all the letters of a word, but their code is broken,
 and they can't figure out why.

Spot and fix the error(s) in the code to make the function work.

Examples
sortWord("dcba") ➞ "abcd"

sortWord("Unpredictable") ➞ "Uabcdeeilnprt"

sortWord("pneumonoultramicroscopicsilicovolcanoconiosis") ➞ "aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv"
Notes
Input is a word. -->
<!-- Importtant Tips
The function splits the word into an array of letters using the split('')
 method, sorts the array using the sort() method, 
and joins the letters back into a string using the join('') method. -->
 * 
 */
function sortWord(word){
    return word.sort();
}