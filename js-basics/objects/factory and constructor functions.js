

// const address = {
//     street: `Via Mattinelle, 18`,
//     city: `San Pietro al Tanagro`,
//     zipcode: `84030`
// };


// Factory function.


function createAddress (street, city, zipcode) {
    return  {
        street,
        city,
        zipcode
    }
};

const addressOne = createAddress(`Via Mattinelle, 18`, `San Pietro al Tanagro`, `84030`)
console.log(`addressOne   `, addressOne);




// Constructor Function.

function Address (street, city, zipcode) {
    this.street =  street;
    this.city = city;
    this.zipcode = zipcode;
};


const addressTwo = new Address (`Via Mattinelle, 18`, `San Pietro al Tanagro`, `84030`);
console.log( `addressTwo   `, addressTwo);