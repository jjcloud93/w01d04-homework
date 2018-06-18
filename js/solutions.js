//Verbal questions

// Parameters are variables inside a function, while an argument
// is the value of the variable(parameter).

// Console.log is only useful to the programmer for issues like
// debugging, while return pushes the value to the next code.

//Palindrome
const checkPalindrome = (string) => {
  let lowerCase = string.toLowerCase();
  let reverseString = lowerCase.split('').reverse('').join('');
  if (lowerCase === reverseString) {
    return true;
  }else {
    return false;
  }
}
console.log(checkPalindrome("Radar"));

//Digit Sum
const sumDigits = (num) => {
  num = Math.floor(num);
  let sum = 0;
  while(num > 0) {
     sum += num % 10;
     num = Math.floor(num/10);
       }
  return sum;
  };
console.log(sumDigits(42));

// Pythagoras
const calculateSide = (sideA, sideB) => {
	  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
console.log(calculateSide(9,6))

// Sum Array
const sumArray = (arr) => {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }    
  return total;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))

// Prime Numbers
const checkPrime = (number) => {
  for (i = 2; i < number; i++) {
    if(number % i === 0){ 
      return false;
    }
  else {
    return true
  }
}
};
console.log(checkPrime(2))

// Insert Dash
const insertDash = (dash) => {
  let dashstr = dash.toString('').split('')
  for (i = 0; i < dashstr.length; i++){
    if (dashstr[i]%2 == 0){
      if (dashstr[i+2]%2 != 0){
        dashstr.splice(i, 0, "-")
      }
    }
  }
return dashstr;
}
console.log(insertDash(454793));


































