

// My solution within a given range of numbers.
function fizzBuzz (a, b) {

    const numbers = [...Array(b - a + 1).keys()].map(x => x + a);
    let string = [];

    for (let number of numbers) {
        if (number % 3 === 0) {
            string.push('Fizz');
        } else if (number % 5 === 0) {
            string.push('Buzz');
        } else if (number % 3 === 0 && number % 5 === 0) {
            string.push('FizzBuzz');
        } else if (number % 3 !== 0 && number % 5 !== 0) {
            string.push(number)
        } else {
            string.push('Not a Number!')
        };
    }

    return string;

}


console.log(fizzBuzz(20, 40));



// Instructor solution on a single number.

const output = fizzBuzz1(true);
console.log(output);


function fizzBuzz1 (input) {

    if ( (input % 3 === 0) && (input % 5 === 0) ) return 'FizzBuzz';

    if (typeof input !== 'number') return NaN;
    
    if (input % 3 === 0) return 'Fizz';
    
    if (input % 5 === 0) return 'Buzz';
    

    return input;
}

