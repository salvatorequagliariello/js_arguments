 
// If...else.


const hour = 10;
let hail = '';

if (hour >= 6 && hour < 12) {
    hail = 'Good morning!';
} else if (hour >= 12 && hour < 18) {
    hail = 'Good afternoon!';
} else {
    hail =  'Good evening!';
}

console.log(hail);




// Switch...case.

let role  = 'guest';
let result = '';


switch (role) {
    case 'guest':
        result = 'Guest User';
        break;

    case 'moderator':
        result = 'Moderator User';
        break;
        
    default:
        result = 'Unknown User';
};

console.log(result);




// FOR Loop.

for (i = 0; i < 5; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}; 



// WHILE Loop.

// i ++;
while (i <= 5) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i ++;
}



// DO-WHILE Loop.

let i = 0;
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i ++;
} while (i <= 5);



// FOR...IN Loop.

const person = {
    'name': 'Marc',
    age: 25
};

for (let key in person){
    console.log(key, person[key]);
}




// FOR...OF Loop;

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}





