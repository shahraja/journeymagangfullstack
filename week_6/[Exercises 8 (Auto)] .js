function pasanganTerbesar(num) {
  // you can only write your code here!
    var arr = [];   //membuat variable arr dengan nilai array
  var res = 0;    //mambuat variable res dengan nilai 0
  for (var i = 0; i <= num.toString().length-1; i++) {
    //mengulang variable i dengan nilai 0, i kurang dari sama dengan (parameter) num.toString() .length-1 untuk menjumlahkan dan dikurangi 1, i++ untuk menghitung dari kecil kebesar
    arr.push(num.toString()[i] + num.toString()[i+1]);
    //variable arr .push() untuk menyimpan nilai
  }
  
  res =  arr.reduce(function(x,y) { 
  //variable res akan memanggil variable arr .reduce untuk menggabungkan dari jumlah nilai dalam array
    return (x > y) ? x : y;   //akan me-return nilai x lebih dari y maka x dibagi y
  });
  
  return Number(res); // jalankan Number dengan parameter res
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99