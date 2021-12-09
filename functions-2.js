/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (x, y) => {
  if (x > y) {
    return x;
  } else return y;
};
/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (x, y, z) => {
  if (x > y && x > z) {
    return x;
  } else if (y > z && y > x) {
    return y;
  } else return z;
};

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
const isCharacterAVowel = () => {
  if (str === ('a' || 'i' || 'o' || 'u' || 'e')) {
    return true;
  } else {
    return false;
  }
};

let testStr = "MALIK";

console.log(testStr.reverseString(testStr));
};

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (arr) => {
  let sum = 0;
  for (let i; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

multiArray = (arr) => {
  let multi = 1;
  for (let i; i < arr.length; i++) {
    multi *= arr[i];
  }
  return multi;
};

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

argumentCount = () => {
  return arguments.length;
  return multi;
};

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (txt) => {
  let j = txt.length - 1;
  let out = [];
  for (let i = 0; i < txt.length; i++) {
    out[i] = txt[j];
    j--;
  }
  return out.join("");
};

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (txt) => {
  let max = 0;
  for (let i = 0; i < txt.length; i++) {
    const word = txt[i].length;
    if (word > max) {
      max = word;
    }
  }
  return max;
};

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (txt, i) => {
  // ADD YOUR CODE HERE
  let out = [];
  for (let i = 0; i < txt.length; i++) {
    if (txt[i].length > i) {
      out.push(txt[i]);
    }
  }
};

/*
Bonus
*/
String.prototype.reverseString = function (txt) {
  let j = txt.length - 1;
  let out = [];
  for (let i = 0; i < txt.length; i++) {
    out[i] = txt[j];
    j--;
  }
  return out.join("");
};
