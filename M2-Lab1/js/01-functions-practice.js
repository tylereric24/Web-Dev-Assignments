//STEP 1
function halfNumber(number) {
    var half = number / 2;
    console.log("Half of " + number + " is " + half + ".");
    return half;
}

//STEP 2
function squareNumber(number) {
    var square = number * number;
    console.log("The result of squaring the number " + number + " is " + square + ".");
    return square;
}
//STEP 3
function percentOf(num1, num2) {
    var percentage = (num1 / num2) * 100;
    console.log(num1 + " is " + percentage + "% of " + num2 + ".");
    return percentage;
}
//STEP 4
function findModulus(num1, num2) {
    var modulus = num1 % num2;
    console.log(modulus + " is the modulus of " + num1 + " and " + num2 + ".");
    return modulus;
}
halfNumber(10); 
squareNumber(5);
percentOf(4, 8); 
findModulus(4, 10); 