

const address = {
    street: `Via Mattinelle, 18`,
    city: `San Pietro al Tanagro`,
    zipcode: `84030`
};


    function showAddress (obj) {
        
        for (key in obj) console.log(key, `  `, obj[key])

    };


    showAddress(address);