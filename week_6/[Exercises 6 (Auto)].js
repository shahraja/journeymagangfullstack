function angkaPalindrome(num){
  if (num < 9){     //jika num (parameter) kurang dari 9
    return num+1    //akan me-return num (parameter) di tambah dengan 1
  }else{    // jika salah
    for(var j = num; j < 2000; j++){    //akan menjalankan variable j yang berisi variable num (parameter)
      var x = j.toString()  //untuk mengembalikan objek string yang mewakili nilai integer pada variable x
      x = x.split("")   //x.split("") untuk memecah nilai dan menjadikan nilai ke array
      x = x.reverse()   //x.reverse() untuk membalikan nilai
      x = x.join("")    //x.join("") untuk menggabungkan nilai menjadi satu kembali
      
      if (j == x){    //jika nilai j sama dengan nilai x
       return j   //akan me-return nilai j
     }
      
    }
     
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001