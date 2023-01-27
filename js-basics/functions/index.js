

// Function declaration.
// We can call a fuction declarated with this method BEFORE it's definition, cause javascript engine will take them to the top of it's stack, when running (HOISTING).
function walk () {
    console.log(`walk`);
};




// Function Exprerssion.
// While we CAN'T call a function declarated with the expression method before it's definition.
const run = function() {
    console.log(`run`)
};



// ARGUMENTS.

// In everey function, when the numbers of parameters is unknown, or we don't want to set a limit, we can use the `argmunents` object. The `argument` object is iterable, and it's composed by some keys that are the indexes of the value, and the values that are the arguments we pass to the function.
// Example.

function sumOfArguments () {
    let total = 0;

    for (value of arguments) total += arguments;

    return total;
}

console.log(sumOfArguments(1, 2, 3, 4,));  // This will return the sum of the arguments.




// THE REST OPERATOR.
// We can add `...` three dots to a parameter in a function to transform it into a REST OPERATOR (very similar to the spread operator, bu without being closed in an array constructo). A rest operator works like the arguments obj, but it takes all of its arguments and put them into an array. The rest operator must be the last to be written in the parameter section, otherwise we will get an error.

function cart (discount, ...prices) {

    const total = prices.reduce((a, b) => a+ b);
    return total * (1 - discount);

}

console.log(cart(0.1, 20, 30, 1));




// DEFAULT PARAMETERS.
// We can apply DEFAULT parameters in our functions simply using the OR operator into a variable (let isPossible = true || false) or we can declare it directly when we write down parameters for our function (function getIt (numbers, total = 10)). But when we give a parameter a default value, all of the successive paramters, should have the same value. Otherwise, it will be confusing for the javascript engine.

function getDays (day, years, month = 2) {};
function getDays (day, years = 2013, month = 2){};
function getDays (day = 23, years, month){}; // The results of this will be `undefined`, cause the javascript engine doesn't understand to which variable assign you argument.




// GETTERS AND SETTERS.

const person = {
    firstName: `Salvatore`,
    lastName: `Quagliariello`,
    getFullName () {
        return `${this.firstName} ${this.lastName}`
    },
};

// Using GETTERS we can read the person.method as a property, without using the round brackets. While with SETTERS we can set it from outside the object.

const person2 = {
    firstName: `Salvatore`,
    lastName: `Quagliariello`,
    get getFullName () {
        return `${this.firstName} ${this.lastName}`
    },
    set getFullName (name) {
        name = name.split(` `);
        this.firstName = name[0];
        this.lastName = name[1];
    }
};
console.log(person.getFullName())
console.log(person2.getFullName);

person2.getFullName = `Giovanni Belardi`; // We use the setter to change the value of the getter.

console.log(person2.getFullName); // We console.log the getter.




// LOCAL AND GLOBAL SCOPE.
// The `var` declaration of a variable make it function-scoped and it attaches the declared variable to the window object.

function getCounter () {
    
    for (var i = 0; i < 5; i++) console.log(i);

    console.log(i)

};
// In this example `i` is accessible from outside the block of the FOR loop. 

function getCounter () {
    
    for (let i = 0; i < 5; i++) console.log(i);

    console.log(i)

};
// In this example we will get an error, cause `i` ì, using the `let` or `const` declaration, is not accessible from outside the for loop block.