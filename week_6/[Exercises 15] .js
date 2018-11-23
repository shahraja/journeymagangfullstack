function groupAnimals(animals) {
  // you can only write your code here!
    animals.sort();
  var hewan = [];
  var huruf = animals[0][0];
  var kebunBinatang = [];
  
  
  for (var i = 0; i < animals.length; i ++) {
    if (animals[i][0] === huruf) {
      hewan.push(animals[i]);
    }
    else {
      kebunBinatang.push(hewan);
      hewan = [];
      huruf = animals[i][0];
      hewan.push(animals[i]);
    }
    if (i === animals.length-1) {
      kebunBinatang.push(hewan);
    }
  }
  return kebunBinatang;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]