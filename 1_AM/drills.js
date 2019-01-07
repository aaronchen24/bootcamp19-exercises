const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return (str.split(" "));
};
console.log(tokenize("This is my message"));


const reverse = str => {
  // TODO - write a function which reverses the string
  let reversed = "";
  console.log(reversed);
  for (let i = str.length - 1; i > -1; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverse("Test"));


const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
let unique = [];
const len = arr.length;
for (let i = 0; i < len; i++){
  if (!(arr[i] in unique)){
    unique.push(arr[i]);
  }
}
return (unique);
};
console.log(uniqueOnes([1, 2, 3, 2, 1]));

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  let product = 1;
  for (let i = num; i > 1; i--){
    product *= i;
  }
  return (product);
};
console.log(factorial(5));

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++){
    arr3.push([arr1[i], arr2[i]]);
  }
  return (arr3);
};
console.log(zip([1, 2, 3,], ["a", "b", "c"]));

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  let arr1 = [], arr2 = [];
  for (let i = 0; i < arr.length; i++){
    arr1.push(arr[i][0]);
    arr2.push(arr[i][1]);
  }
  return [arr1, arr2];
};
console.log(unzip([[1, 4], [2, 5], [3, 6]]))

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  const len = str.length;
  let newStr = str.substring(len - (num % len));
  newStr += str.substring(0, len - (num % len));
  return (newStr);
};
console.log(shiftRight("Hello", 8));

/*const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  let now = new Date():
  const library = [[1, January], [2, February], [3, March], [4, April], [5, May]]
  const monthNum = now.getMonth();
  
  return ("Today's date is ${}. It is ${} in the morning") 
};
*/

// Write tests here:

// asssert (reverse("3df") === "fd3")
