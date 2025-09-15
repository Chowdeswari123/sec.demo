//print statement
console.log("SRIT")

//Data types in js

num=12;
str="hi";
bol=true;
bigint = 754895648458421364;
//undefined
unde;
null1=null;

//var let const
var name1="srit";
console.log(name1)
var name1="hi";
console.log(name1)

let course="csm";

let age=20;
console.log(age)
age=21;
console.log(age)

const givename="Martin";
console.log(givename)

givenname="rtin";
console.log(givenname)

function triangleArea(base, height) {
  return 0.5 * base * height;
}

// Example usage:
const base = 10;
const height = 5;
console.log("Area of the triangle:", triangleArea(base, height));

console.log(factorial(6));

function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(6)); 

function calculator(a, b, operator) {
  switch(operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error: Div by 0';
    default: return 'Invalid operator';
  }
}

// Example usage:
console.log(calculator(5, 3, '+')); 
console.log(calculator(10, 2, '/'));
console.log(calculator(5, 3, '-'));
console.log(calculator(5, 3, '*'));

let speed = 30;
let distance = 0;
for(i=10;i<=90;i+=10){
    distance = distance+speed/6;
    if(speed<120){
        speed*=2;
    }
}
distance = distance + speed/speed/10
console.log(distance);
    