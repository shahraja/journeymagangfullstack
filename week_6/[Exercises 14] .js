function mengelompokkanAngka(arr) {
  // you can only write your code here!
   var tampung = [ [], [], [] ];  //membuat variable tampung dengan nilai array
  for(var i = 0 ; i < arr.length ; i++) { //membuatperulangan variable i dengan nilai 0, i kurang dari arr.length, i++
    if(arr[i] % 3 === 0){ //jika variable arr dengan nilai i modulus(hasil yang habis dibagi) sama dengan 0 
      tampung[2].push(arr[i]) //variable tampung dengan nilai 2 .push(simpan nilai) variable arr dengan nilai i
    }else if(arr[i] % 2 === 0){ //jika tidak variable arr dengan nilai i modulus(hasil yang habis dibagi) sama dengan 0
      tampung[0].push(arr[i]) //variable tampung dengan nilai 0 .push(simpan nilai) dari variable arr dengan nilai i
    }else{  //jika tidak 
      tampung[1].push(arr[i]) //variable tampung dengan nilai 1 .push(simpan nilai) dari variable arr dengan nilai i
    }
  }
  return tampung  //jalankan variable tampung
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]