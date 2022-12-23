

function getMax (num1, num2) {
    
    const max = (num1 > num2) ? num1 : num2;
    return max;
};


function showMax (function1) {
    console.log(function1);
};



showMax(getMax(7, 4))