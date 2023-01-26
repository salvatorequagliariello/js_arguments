

const numbers = [1, 2, 3, 4,];

console.log(include(numbers, searchElement));


function include (numbers, searchElement) {

    numbers.forEach(element => {
        
        if (element === searchElement) return true;

    });

    return false;

};