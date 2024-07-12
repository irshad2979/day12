// Find Maximum Of Three NUmbers:

 let num1 = 35
 let num2 = 55
 let num3 = 80
 let maximum = (num1, num2, num3);
console.log("The maximum of the three numbers is: " + maximum);

// Check Palindrome Number:

let number1 = 55464;
let copyNumber1 = number1;

let reverseNumber = 0;

while (number1 > 0) {
    let d = number1 % 10;
    reverseNumber = reverseNumber * 10 + d;
    number1 = Math.round(number1 / 10);
}

console.log(reverseNumber);

if (copyNumber1 === reverseNumber) console.log("Its a Palindrome Number");
else console.log("Not a Palindrome Number");

// Reverse Number :

let number = 7649;
let copyNumber = number;

let reversedNumber = 0;
    while (number > 0) {
        let digit = number % 10;
        reversedNumber = (reversedNumber * 10) + digit;
        number = Math.floor(number / 10);
    }
    console.log(reversedNumber)

// Prime Number Check :

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
   
    let divisor = 2;
   
    while (divisor < num) {
      if (num % divisor === 0) {
        return false;
      }
   
      divisor++;
    }
   
    return true;
  }
  console.log(isPrime(8));
  console.log(isPrime(5));

// Armstrong Number Check:

const Number = "92727";
const numberOfDigits = Number.length;
let sum = 0;


let temp = Number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    temp = parseInt(temp / 10); 
}

if (sum == Number) {
    console.log(`${Number} is an Armstrong number`);
}
else {
    console.log(`${Number} is not an Armstrong number.`);
} 