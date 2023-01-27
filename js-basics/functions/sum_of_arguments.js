

console.log(sum(1, 2, 3, 4));


function sum(...n) {

    return (Array.isArray(n[0])) ? n.flat().reduce((a, b) => a + b) : n.reduce((a, b) => a + b);

};
