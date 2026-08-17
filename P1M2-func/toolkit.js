const addTwoNumbersA = (a, b) => {
  return a + b;
}

console.log(addTwoNumbersA(2, 3));

const AddTwoNumbers = (a, b) => a + b;

console.log(AddTwoNumbers(5, 7));

// removing the braces made it where I can make one line code and I don't have to use the return keyword.

const applyTwice = (func, value) => {
    return func(func(value));
}
P1M2-func
console.log(applyTwice(x => x * 2, 5));

const multiplySumBy2 = (func, valueA, valueB) => {
    return func(func(valueA, valueB), func(valueA, valueB));
}

console.log(multiplySumBy2(AddTwoNumbers, 2, 3));

myMap = (array, callback) => {
    let newArray = [];

    for (let item of array) {
        newArray.push(callback(item));
    }

    return newArray;    
}


console.log(myMap([1, 2, 3], x => x * 10));

