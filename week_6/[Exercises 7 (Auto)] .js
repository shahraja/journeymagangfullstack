function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  return kalimat.split(" ").length	
  //akan me-return kalimat.split(" ") untuk memecah kalimat menjadi kata perkata, dan menjumlahkan kata tersebut
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5