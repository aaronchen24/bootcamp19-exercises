// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for (let property in obj){
    if (obj.hasOwnProperty(property) === false) {
      return true;
    }
  }
  return false;
};

const test = ["hello", "cool", "123", "true", true];
const test2 = [0];

console.log(hasFalsyValue(test))
console.log(hasFalsyValue(test2))