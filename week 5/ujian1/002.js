// Competencies: Loopings
/*
=============
Number Ladder
=============

Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height. 
Buatlah sebuah tangga angka dengan pola berikut:

contoh 1 (height = 3):
1
12
123

contoh 2 (height = 5):
1
12
123
1234
12345
 
contoh 3 (height = 1):
1

tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.

Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var height = ''; // isi dengan nilai tinggi tangga!

for(var i=1; i <= 3; i++){
  for(var j=1; j <= i; j++){
    height= height + j;
  }
  console.log(height);
  height='';
}

var height = '';
for(var i=1; j <= 5; i++){
  for(var j=1; j <= i; j++){
    height= height + j;
  }
  console.log(height);
  height='';
}