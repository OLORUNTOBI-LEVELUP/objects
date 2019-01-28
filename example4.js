const sumPolyfill = function() {};
sumPolyfill.prototype.addition = function(value1, value2) {
    return value1 + value2;
}
const polyInstance = new sumPolyfill()
console.log(polyInstance.addition(1, 2));



const letPolyfill = function() {};
letPolyfill.prototype.subtraction = function(value1, value2) {
    return value1 - value2;
}
const polyInstance2 = new letPolyfill()
console.log(polyInstance2.subtraction(4, 1))




const multiplyPolyfill = function() {};
multiplyPolyfill.prototype.multiplication = function(value1, value2) {
    return value1 * value2;
}
const polyInstance3 = new multiplyPolyfill();
console.log(polyInstance3.multiplication(1,2));




const dividePolyfill = function() {};
dividePolyfill.prototype.division = function(value1, value2) {
    return value1 / value2;
}
const polyInstance4 = new dividePolyfill();
console.log(polyInstance4.division(10, 5))