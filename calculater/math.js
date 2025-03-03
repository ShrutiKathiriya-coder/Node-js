function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error! Division by zero.";
    }
    return a / b;
}
module.exports = { add, sub, multi, divide };
