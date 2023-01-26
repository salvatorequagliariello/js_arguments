
// Declaring an Array.
const numbers = [3, 4];


// Method used to push elements at the end of an array. 

numbers.push(5, 6);

console.log(numbers);


// Method used to push elements at the begninng of the array. 

numbers.unshift(1, 2);

console.log(numbers.join);


// Method "splice" , used to place new elements in the middle of an Array, or removing them. 

numbers.splice(2, 1, 1);

console.log(numbers.join());



// The "index.of" method return the index of the given element (in the parameter section) in the Array, if the element ins't part of the array, it will return - 1. 

console.log(`indexOf`, numbers.indexOf(`a`)); // Returns 0, cause `a` is not an element of `numbers`.
console.log(`indexOf`, numbers.indexOf(4)); // Returns `3`, the index of `4` in `numbers`.


// While "indexOf" returns the first position of the given elements in an Array, `lastIndexOf`, give us the last index of that element in the array. 

console.log(`lastIndexOf`, numbers.lastIndexOf(1)); // Returns `2`, the last position of `1`, in numbers.


// To check if a given element is simply present in a given array we use the method `INCLUDES`, that returns a boolean value.
console.log(`includes 1`, numbers.includes(1));
console.log(`includes 'a'`, numbers.includes(`a`));


// Everyone of the precedents methods can have a secod parameter, that will be the index of where the `search` will start.

console.log(`indexOf with second parameter `, numbers.indexOf(1, 1)); // Returns `2`, the position of the second `1` in `numbers`;




// Finding REFERENCE TYPES ELEMENTS in a given array.

const courses = [
    { id: 1, name: `a` },
    { id: 2, name: `b` },
    { id: 3, name: `c` },
    { id: 4, name: `d` }
];

const firstCourse = courses.find(function(course) { return course.name === `a`});

console.log(`findMethod`, firstCourse);




// Removing elements from an array. 

const numbersTwo = [1, 2, 3, 4];

// POP Method.
// Remvove from the applied array and return to the assigned variable the last element of the array you applied it.
const last = numbersTwo.pop();

// SHIFT Method.
// Remvove from the applied array and return to the assigned variable the first element of the array you applied it.
const first = numbersTwo.shift();

// SPLICE Method.
// Use two arguments, the starting index and the number of elements you'd like to remove from the array.
numbersTwo.splice(1, 0) //remove 1 from the array.




// Emptying an array.
// A list of the solutions to empty effectively an array.

const array6 = [1, 2, 3 ,4, 5, 6];

// Setting the length of the array to 0, we will delete every element in it, the best method.
array6.length = 0;

// Using the SPLICE method, setting the starting index to 0 and the ending index to the length of the array.
array6.splice(0, array6.length);

// Looping the POP method over the array, using the length of it, not raccomendend, too slow.
while (array6.length > 0)  numbers.pop();




// COMBINING AD SLICING ARRAYS.

const fourth = [1, 2, 3];
const fifth = [4, 5, 6];

const combined = fourth.concat(fifth) // To concatenate the two arrays.
const sliced = combined.slice() // To slice the prev array.




// THE SPREAD OPERATOR.

const combinedSpread = [...fourth, ...fifth]; // The output will be the same as using the CONCAT method. But with much more flexibility.
const combinedSpread2 = [...fourth, 2, ...fifth, 3]; // Using the SPREAD OPERATOR we can insert other elements into the array, and we have a much complete view of how the final array will be.




// ITERANTING AN ARRAY.

const iterNumebrs = [1, 2, 3, 4];

// We can iterate through an array using two methods. The first one is the FOR of method. 

for (number of iterNumebrs) console.log(number);

// The second one is the FOR EACH method. It use a callback function in the method itself, that can work with two different parameters. The element of the array (that we can call as we like, e.g `number` for numbers) and the INDEX of the element where we are at the moment.

iterNumebrs.forEach(function (number) {
    console.log(number)
});
// That can be transformed in :
iterNumebrs.forEach((number, index) => console.log(index, number)) // Using an arrow function.




// SORTING ARRAYS.

const unsortedNumbers = [3, 2, 1];
const sortedNumbers = unsortedNumbers.sort() // The method sort them, by translate them into a string, then again into their original state.

// Sorting Objects.

const coursesUnsorted = [
    {id: 1, name: `Node.js`},
    {id: 2, name: `JavaScript`}
]; 
// Working withana arrays of object  we can't simply use the SORT Method to return the objs sorted. We need to use a callback as argument of the sort method, to compare values inside the objs.

courses.sort((a, b) => {

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;

});




//  TESTING THE ELEMENTS OF AN ARRAY.

//Using the EVERY method.

const testNumbers1 = [1, 2, 3];
const allPositive = testNumbers1.every((number) => number >= 0); //The EVERY method takes as argument a callback function with three parameters (value, index adn array) and return a boolean value. It returns true only if ALL the elements in the array satisfy the condition in the callback. In this case it return true.

const testNumbers2 = [1, -1, 2, 3];
const allPositive2 = testNumbers2.every((number) => number >= 0); // In this case the every method will return FALSE cause ONE element in the array isn't positive.

// Using the SOME method.

const testNumbers3 = [1, 2, -3, 4, 5];
const atLeastOnePositive = testNumbers3.some((number) => number >= 0); // Even if there is a NEGATIVE value in the array, the SOME method will return TRUE,  cause it checks for the first element that satisfy the condition then stop.




// FILTERING AN ARRAY.

// Using the FILTER method.

const unfilteredNumbers = [1, -1, 2, 3, -5];
const filtered = unfilteredNumbers.filter(n => n >= 0);

// The filter method uses a callback with three parameters (value, index and array) to store the values that satisfy the given function into the assigned variable.




// REDUCING AN ARRAY.

const totalNumbers = [1, 2, 3, 4, 5, 6];

const sum = totalNumbers.reduce((accumulator, currentValue) => accumulator + currentValue)

// The REDUCE Method takes as parameters a callback fuction and optionally a value (a number, that will be the starting point of the ACCUMULATOR, if inserted in the function, if not inserted the accumulator will have the value of the first element of the array). The callback function takes as paramenters several arguments. Such as `accumulator`, currentValue, currentIndex. It add the currentValue to the accumulator.