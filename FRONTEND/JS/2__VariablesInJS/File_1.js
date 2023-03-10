let numberToCheck_1 = 10;
let numberToCheck_3 = 23;
let numberToCheck_2 = 44;

// ( numberToCheck_1 %2 )==0 ? console.log("yes its even") : console.log("no its odd");
// ( numberToCheck_2 %2 )==0 ? console.log("yes its even") : console.log("no its odd");

if((numberToCheck_1 > numberToCheck_2) && (numberToCheck_1 > numberToCheck_3)){
    console.log("numberToCheck_1 is the max");
}
else if((numberToCheck_2 > numberToCheck_1) && (numberToCheck_2 > numberToCheck_3)){
    console.log("numberToCheck_2 is the max");
}
else {
    console.log("numberToCheck_3 is the max");
}
    