function palindrome(kata) {
  // you can only write your code here!
 var reversed = kata.split("").reverse().join(""); //membuat variable dengan memecah kata
 if (reversed === kata) return true; //jika variable sama dengan kata maka akan me-return true

 return false //jika variable tidak sama dengan kata akan me-return false
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false