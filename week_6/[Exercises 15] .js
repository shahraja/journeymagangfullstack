function groupAnimals(animals) {
  // you can only write your code here!
    animals.sort();
  var hewan = [];   //membuat variable hewan dengan nilai array
  var huruf = animals[0][0];  //membuat variable huruf dengan nilai array 0
  var kebunBinatang = []; //membuat variable kebunBinatang dengan nilai array
  
  
  for (var i = 0; i < animals.length; i ++) {   //membuat perulangan variable i
    if (animals[i][0] === huruf) {  //jika variable animals dengan nilai array i dan 0 sama dengan  (identik) variable huruf
      hewan.push(animals[i]); //maka jalankan variable hewan .push() untuk menyimpan variable animals dengan nilai array
    }
    else {  //jika tidak 
      kebunBinatang.push(hewan);  //jalankan kebunBinatang .push() untuk menyimpan variable hewan
      hewan = []; //variable hewan dengan nilai array
      huruf = animals[i][0];  //variable huruf dengan nilai variable animals dengan nilai array i dan 0
      hewan.push(animals[i]); //variable hewan .push() untuk menyimpan nilai variable animals dengan nilai array
    }
    if (i === animals.length-1) { //jika i sama dengan (identik) variable animals
      kebunBinatang.push(hewan);  //jalankan kebunBinatang .push() untuk menyimpan nilai variable hewan
    }
  }
  return kebunBinatang; //jalankan variable kebunBinatang
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]