const math = require('./math');
console.log("Simple Calculator");
var a = 18;
var b = 9;
var sum = "mul";
switch(sum) {
    case "add":
        console.log("addition is: " + (a + b));
        break;
    case "sub":
        console.log("subtraction is: " + (a - b));
        break;
    case "mul":
        console.log("multiply is: " + (a * b));
        break;
    case "divide":
        console.log("division is: " + (a / b));
        break;
    default:
        console.log("Your Choice is Invalid ");
        break;
}