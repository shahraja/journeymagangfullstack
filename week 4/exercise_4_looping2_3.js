var rows3 = 6;

var initial = 1;
var i = 0;

while (i<rows3) {
  var pyramid = '*';
  var j=0;
  while (j<i) {
    pyramid = pyramid +'*';
    j++;
  }
  console.log(pyramid);
  i++;
}