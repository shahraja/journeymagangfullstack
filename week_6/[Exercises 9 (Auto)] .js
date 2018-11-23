function cariMean(arr) {
  // you can only write your code here!
  var jumlah = 0;	//membuat variable jumlah dengan nilai 0
  
  for (var i in arr) {	//membuat perulangan dengan variable i dalam arr
    jumlah += arr[i];	//variable jumlah ditambah sama dengan arr dengan nilai array i
  }
  
  return Math.round(jumlah / arr.length);	//maka jalankan math.round untuk membulatkan nilai angka dari nilai variable jumlah dan arr
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7