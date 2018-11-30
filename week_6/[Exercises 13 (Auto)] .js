function targetTerdekat(arr) {
  // you can only write your code here!
  var indexO = arr.indexOf("o") //membuat variable indexO dengan nilai variable arr .indexOf untuk mengmbalikan index saat memanggil string pertama kali dengan value tertentu
  var jarak = 0   //membuat variable jarak dengan nilai 0
  var jarakTerdekat = arr.length  //membuat variable jarakTerdekat dengan nilai variable arr.length
  
  if (arr.indexOf("x") === -1) {  //jika arr.indexOf adalah x sama dengan dikurang 1 
    return 0  //jalankan 0
  }
  
  for (var i = 0; i < arr.length; i++) {  //perulangan variable i dengan nilai 0, i kurang dari variable arr.length, i++
    if (arr[i] === "x") { //jika variable arr dengan nilai i sama dengan x
      jarak = Math.abs(i - indexO)  //variable jarak sama dengan Math.abs adalah untuk mengembalikan ilai mutlak i - indexO
      if (jarak < jarakTerdekat) {  //jika jarak kurang dari jarakTerdekat
        jarakTerdekat = jarak   //variable jarakTerdekat sama dengan variable jarak
      }
    }
  }
  
  return jarakTerdekat  //jalankan variable jarakTerdekat
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2