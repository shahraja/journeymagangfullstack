function palindrome(kata) {
  // you can only write your code here!
 var reversed = kata.split("").reverse().join("");
 if (reversed === kata) return true;

 return false
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false