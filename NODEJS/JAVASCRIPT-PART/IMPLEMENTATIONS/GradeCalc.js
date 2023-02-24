let calculateMyGrade = function(myMarks, totalMarks){
    let myPercentage = (myMarks/totalMarks)*100;
    let myGrade = '';

    if (myPercentage >= 90) {
        myGrade = 'A';
    } else if(myPercentage >= 80){
        myGrade = 'B';
    } else if(myPercentage >= 70){
        myGrade = 'C';
    } else if (myPercentage >= 60) {
        myGrade = 'D'
    } else{
        myGrade = 'F';
    }

    return `Your grade is ${myGrade} and your percentage is ${myPercentage}`;
}

let yourGrade = calculateMyGrade(98,100);
console.log(`Result  :${yourGrade}`);  