function palindrome(kata) {
  // you can only write your code here!
 var reversed = kata.split("").reverse().join(""); 
 //membuat variable reversed dengan memecah kata dengan .split("") dan mengubah menjadi array , membalikan dengan .reverse(), dan menggabungkan dengan .join("")
 if (reversed === kata) return true; 
 //jika variable reversed sama dengan kata (parameter) maka akan me-return true

 return false 
 //jika variable reversed tidak sama dengan kata akan me-return false
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false