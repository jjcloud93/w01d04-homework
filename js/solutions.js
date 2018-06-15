//Verbal questions

// Parameters are variables inside a function, while an argument
// is the value of the variable(parameter).

// Console.log is only useful to the programmer for issues like
// debugging, while return pushes the value to the next code.

//Palindrome

const checkPalindrome = (string) => {
	let data = string.length;
for(i = 0; i < Math.floor(data/2); i++) {
	if (string[i] !== string[data - 1 - i]) {
		return false;
	}
}
	return true;
}
console.log(checkPalindrome('radar'));



const checkPalindrome2 = (string) => {
  let lowerCase = string.toLowerCase();
  let reverseString = lowerCase.split('').reverse('').join('');
  if (lowerCase === reverseString) {
    return true;
  }else {
    return false;
  }
}
console.log(checkPalindrome2("Radar"));

//Digit Sum
const sumDigits = (num) => {
  num = Math.floor(num);
  let sum = 0;
  while(num > 0) {
     sum += num % 10;
     num = Math.floor(num/10);
       }
  return num;
  };
console.log(sumDigits(42));

//Pythagoras








































































