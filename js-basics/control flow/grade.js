

const marks = [80, 80, 50, 100];

console.log(showGrades(calculateAverage(marks)));


    function calculateAverage (array) {

        let sum = 0;

        for (value of array) {
            sum += value;
        }
        
        return sum / array.length;
        
    };



    function showGrades (average) {

        if (average < 60) return 'F';
        if (average < 70) return 'D';
        if (average < 80) return 'C';
        if (average < 90) return 'B';
        return 'A';
    };


    