
// Arithmetic Operators.
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment and decrement operators;
console.log(++ x); // If we put the increment operator before the "x" in the console log, "x" will be incremented and then showed into console.
console.log(x ++); // Otherwise, the increment will be after we showed it onto the console.

console.log(-- x); // The same concept is applied on the decrement operator.
console.log(x --);



// Assignement Operators;
// Every arithmetic operator can be used as an Assignement Operator.
x += 5;
x *= 3;




// Comparison Operators.

// Relational Operators.
console.log(x > 0);
console.log(x >= 1);

// Equality.
console.log(x === 1);
console.log(x !== 1);

// Strict Equality (ensures that the variables or the data have the same type and the same value).
console.log(1 === 1); // True.
console.log('1' === 1); // False.

// Lose Equality (ensures that only the values are equal; will change the type, if necessary of the second variable according to the first (the one on the left)).
console.log(1 == 1); // True.
console.log('1' == 1); // True.
console.log(true == 1); // True.



// Ternary Operator.

const points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

const age = 26;
const beverage = age >= 21 ? 'Beer' : 'Juice';

console.log(beverage);



// Logical Operators.

// AND.
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan); // Returns "true" if both operands are "TRUE";

// OR.
highIncome = true;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan); // Returns "true" if one operand is "TRUE";

// NOT.
const applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);




// Logical Operators with Non-Booleans.
let userColor = '';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);









