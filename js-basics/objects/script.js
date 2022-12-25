

// Object literal sintax.

const circle = {
    radius: 2,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};


circle.draw();



// Factory Functions.

function createCircle (radius) {
    return {
        radius,
        draw () {
            console.log('draw2');
        }
    };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);

console.log('circle 1', circle1);
console.log('circle 2', circle2);
circle2.draw();



// Constructor Functions.

function Circle(radius, message) {
    this.radius = radius;
    this.message = function() {
        console.log(message);
    }
}

const circle3 = new Circle (3, 'ciao, come stai?')

console.log(circle3.radius);
circle3.message();


// Objects are dynamic, in JS. Even using the assignment word "const", we can still add, delete and modify every of their property.


// Primitives are copied by their value, OBJECTS are copied by their reference.

const x = { value: 10};
const y = x;

y.value = 40;

// EXAMPLE.

let number = 10;  // we use a primitive to test this concept.

function increase (number) {  // create a function to "increase" the value of it's property.
    number ++;
};

increase(number);  // call that function.
console.log(number); //  when we'll console.log that number, it will still be 10. cause the one used into the function it's a "copy" out of the scope.


const number1 = { value: 10};

function increaseObj (obj) {
    obj.value ++;
};

increaseObj(number1);

// but if we apply the same function to an object, we'll have the value increased by 1. cause either the function or the const are pointing to the same object. there are no copies of   the same variable.
console.log(number1.value) 

const numberTry = 4;

const circleArrays = {
    array1: [4, 5, 6, 3],
    array2: [1, 4, 0, 2],
    array3: [3, 9, 0, 6]
};

let i = 0;

    for (key in circleArrays) {
        if (circleArrays[key].includes(numberTry))  circleArrays[key][i] = 0;
        i ++;
    }

console.log(circleArrays.array1)




// Cloning an Object. 
const circle5 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


const anotherCircle = Object.assign({}, circle5);

//   using the spread operator.

const anotherCircle2 = { ...circle5 };


console.log('anotherCircle', anotherCircle);
console.log('anotherCircle2', anotherCircle2);



// Template Literals.

const line = `This is my ${anotherCircle2.radius} first message!`;

console.log(line);



