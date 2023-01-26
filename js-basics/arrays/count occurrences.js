

const numbers = [1, 2, 3, 4, 5];

const count = countOccurences(numbers, 2);

console.log(count);


function countOccurences(array, searchElement) {

    let counter = 0;

    array.forEach(number => {if (number === searchElement) counter++ });

    return counter;

};


function countOccurences2 (array, searchElement) {

    const counter = array.reduce((accumulator, current) => {

        const occurence = (current === searchElement) ? 1 : 0;

        return accumulator + occurence;

    }, 0);

};