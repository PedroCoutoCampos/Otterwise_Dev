let num1 = 6
let num2 = 2
let num3 = 7
 
if (num1 > num2 && num2 > num3) {
    console.log(num1 + num2);
} else if (num2 > num1 && num3 > num1) {
    console.log(num2 + num3);
} else if (num3 > num2 && num1 > num2) {
    console.log(num3 + num1);
}
