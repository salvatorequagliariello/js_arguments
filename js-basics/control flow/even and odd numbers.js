

showNumbers(10);


function showNumbers (limit) {

    for (i = 0; i <= limit; i++) {
        
        let type = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, type);

    }
}