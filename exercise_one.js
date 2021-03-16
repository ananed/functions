// 1.1 Create a new Function
// HINT: Uncomment the following line to return "Hello there!"
function myFirstFunction() {
  // TODO: Uncomment the line bellow
  return "Hello there!";
}

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

// 1.2 Create a Function with a conditional return
// HINT: Complete to the greet function:
// When action === "arrived" than return "Welcome!"
// When action === "left" than return "Goodbye!"
// When there is no action return "Hello!"

function greetFunction(action) {
  if (action==="arrived"){
      return "Welcome!";
  } else if (action==="left"){
      return "Goodbye!";
  }else{
      return "Hello!";
  }
}

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

// 1.3 Create a Function that calculate your age in dog years
// HINT: 1 human year is equal to 7 dog years!
// Create a variable called "dogYears" where your age will be calculated. Remember to use var instead of const

function toDogYears(age) {
  var dogYears;
  // var myage=alert("Tell me your age.");
  dogYears= age * 7;
  return dogYears;
}

// Example
// toDogYears(2) --> 14

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

// 1.4 Create a Function that calculate the maximum between two numbers
function getMaximum(firstNumber, secondNumber) {
     var max;
  if (firstNumber < secondNumber){
      max=secondNumber;
  }else{
      max=firstNumber;
  }
  return max;
}

// Example
// getMaximum(2, 3) --> 3

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

// 1.5 Create a Function that returns the current year
function getCurrentYear() {
  var fecha=new Date().getFullYear();
  
  return fecha;
}

// Example:
// getCurrentYear() --> 2020

// ------- THE END ------------------------------------
/*
   _____          _   __          ___ _   _     _____                            
  / ____|        | |  \ \        / (_) | | |   |  __ \                           
 | |     ___   __| | __\ \  /\  / / _| |_| |__ | |  | |_ __ __ _  __ _  ___  ___ 
 | |    / _ \ / _` |/ _ \ \/  \/ / | | __| '_ \| |  | | '__/ _` |/ _` |/ _ \/ __|
 | |___| (_) | (_| |  __/\  /\  /  | | |_| | | | |__| | | | (_| | (_| | (_) \__ \
  \_____\___/ \__,_|\___| \/  \/   |_|\__|_| |_|_____/|_|  \__,_|\__, |\___/|___/
                                                                  __/ |          
                                                                 |___/           
*/

// DO NOT TOUCH THIS CODE
module.exports = function testWrapper() {
  return {
    myFirstFunction,
    greetFunction,
    toDogYears,
    getMaximum,
    getCurrentYear,
  };
};