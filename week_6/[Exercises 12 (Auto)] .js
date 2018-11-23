function tentukanDeretGeometri(arr) {
  // you can only write your code here!
   var increment = arr[1] / arr [0]		//membuat variable increment dengan nilai variable arr yang bernilai array 1 atau 0
  var selisih = 0;	//membuat variable selisih dengan nilai 0
  for (var i = 0; i< arr.length -1; i++){	//membuat perulangan dengan variable i bernilai 0, i kurang dari variable arr.length-1, dan perulangan dari yang terkecil
    selisih = arr[i+1] / arr[i]
  }
  return increment === selisih;	//jalankan increment sama dengan selisih
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false