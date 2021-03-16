// 2.1 Convert Minutes into Seconds
// Write a function that takes a number (minutes) and converts it to seconds.
// Examples
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120
function minutesToSeconds(minutes) {
  let seconds;
  seconds = minutes * 60;
  return seconds;
}

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

// 2.2 Return the Next Number for a Number
// Create a function that takes a number as an argument,
// increments the number by +1 and returns the result.

function nextNumber(num) {
  let finalnum;

  finalnum=num + 1;
  return finalnum;
}

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

// 2.3 Write a function that takes the base and height of a triangle
// and return its area.
// The area of a triangle is: (base * height) / 2

// Examples
// triangleArea(3, 2) ➞ 3
// triangleArea(7, 4) ➞ 14
// triangleArea(10, 10) ➞ 50

function triangleArea(base, height) {
  let area;

  area=(base * height) / 2;
  return area;
}

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

// 2.4 Convert Age to Days
// Create a function that takes the age of a person in years
// and return the age in days.
// Use 365 days as the length of a year
// Ignore leap years and days between last birthday and now.

// Examples
// calcAgeDays(65) ➞ 23725
// calcAgeDays(0) ➞ 0
// calcAgeDays(20) ➞ 7300

function calcAgeDays(ageYears) {
  let totalDays;

  totalDays=ageYears * 365;
  return totalDays;
}

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------
// 2.5 Convert Hours into Seconds
// Write a function that converts hours into seconds.
// Note: 60 seconds in a minute, 60 minutes in an hour

// Examples
// hoursToSeconds(2) ➞ 7200
// hoursToSeconds(0) ➞ 0
// hoursToSeconds(15) ➞ 54000

function hoursToSeconds(hours) {
  let seconds;

  seconds= hours * 60 * 60;
  return seconds;
}

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

// 2.6 Find the Perimeter of a Rectangle
// Create a function that takes length and width
// and finds the perimeter of a rectangle.

// Examples
// rectanglePerimeter(6, 7) ➞ 26
// rectanglePerimeter(20, 10) ➞ 60
// rectanglePerimeter(2, 9) ➞ 22

function rectanglePerimeter(length, width) {
   let perimeter;

   perimeter= 2 * length + 2 *  width;
   return perimeter;
}

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

// 2.7 Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and
// returns true if it's less than or equal to zero,
// otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-2) ➞ true

function lessThanOrEqualToZero(num) {
  
  if ((num < 0) || (num === 0)) {
      return true;
  }else{
      return false;
  }
}
  


// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

// 2.8 Two Makes Ten

// Create a function that takes two arguments, a and b.
// Return true if one of them is 10 or if their sum is 10.

// Examples
// makesTen(9, 10) ➞ true
// makesTen(9, 9) ➞ false
// makesTen(1, 9) ➞ true

function makesTen(a,b) {
  if ((a + b === 10) || (a === 10) || (b === 10) ){
      return true;
  }else{
      return false;
  }
}

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

// 2.9 Check if an Integer is Divisible By Five

// Create a function that returns true if an integer is evenly divisible by 5,
// and false otherwise.

// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false

function divisibleByFive(num) {
  if (num % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

// ------------------------------------------ CODE WITH DRAGOS ------------------------------------------

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
    minutesToSeconds,
    nextNumber,
    triangleArea,
    calcAgeDays,
    hoursToSeconds,
    rectanglePerimeter,
    lessThanOrEqualToZero,
    makesTen,
    divisibleByFive,
  }
}
