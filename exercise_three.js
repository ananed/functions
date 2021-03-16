// 3.1 Write a function that takes a string and returns it order in alphabetic order
// HINT: You can use String.split() to transform a string in an array of characters and
// HINT: You can use Array.join() to join an array in a string
function alphabetOrder(text) {
  let textArray = text.split("");

  let sortedArray = textArray.sort();

  return sortedArray.join("");
}


 // Example:
 // alphabetOrder("casa") --> "aacs"
 
 // ------------------------------------------ CODE WITH DRAGOS ------------------------------------------
 
 // 3.2 Write a function can detect if a number is prime or not
 // HINT:  A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 function isPrime(num) {
  let isprime = true;
  for (let i = 2; i < num; i++) {
    let rem = num % i;
    if (rem === 0) {
      return false;
    }
  }
  return isprime;
}
 
 // Example:
 // isPrime(5) --> true
 // isPrime(4) --> false
 
 // ------------------------------------------ CODE WITH DRAGOS ------------------------------------------
 
 // 3.3 Count the letter: 
 // Write a function that takes a letter and a text 
 // and counts how many times the letter is the text
 function letterCount(letter, text) {
  let count = 0;
  let textArray = text.split("");
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === letter) {
      count++;
    }
  }
  return count;
}
 
 // Example:
 // letterCount("a","casa") --> 2
 // letterCount("r","Harry") --> 2
 // letterCount("h","harry") --> 1
 
 // ------------------------------------------ CODE WITH DRAGOS ------------------------------------------
 
 // 3.4 Create a Function that calculates the n power of 2
 // HINT: The power 3 of 2 is equal t0: 2 * 2 * 2 = 8
 function calculatePowerTwo(n) {
  var count = 0;
  var potencia = 1;
  var powerTotal = 1;

  if (n === 0) {
    return 1;
  }

  for (let i = 1; i < n + 1; i++) {
    powerTotal = powerTotal * 2;
    count++;
  }
  return powerTotal;
}
 
 // Example:
 // calculatePowerTwo(4) --> 16
 
 // ------------------------------------------ THE END ------------------------------------
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
     calculatePowerTwo,
     alphabetOrder,
     isPrime,
     letterCount,
   };
 };

 
