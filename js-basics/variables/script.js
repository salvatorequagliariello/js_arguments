
//Const declaration.
const interestRate = 0.3;
console.log(interestRate);



//Primitive types.
const name = "Salvatore"; //String literal.
let age = 25; //Number Literal.
let isApproved = true; //Boolean Literal.
const firstName = undefined;
const selectedColor = null;

//Javascript is a Dynamic Language.
//All numbers are "number" type of. There is no difference between an integer and a floating point number.



//Reference Types.

//Objects;
const person = {
    name: "Salvatore",
    age: 25
};

//Dot Notation.
person.name = "Giovanni";
//Bracket Notation.
person["name"] = "Mary";

console.log(person);

//Arrays;
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors.length);



//Functions.

function greet(name, lastName) {
    console.log("Hello " + name + ' ' + lastName);
};


greet('John', 'Smith');
greet('Marc');



//Types of Functions.

function square (number) {
  return number * number;
};

console.log(square(2));