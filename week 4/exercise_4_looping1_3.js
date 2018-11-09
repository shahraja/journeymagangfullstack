var nilai = 1;
var akhir = 100;
while( nilai <= akhir ){
if(nilai%2==0)
{
document.write(nilai+" adalah bilangan genap" );
} else
{
document.write(nilai+" adalah bilangan ganjil" );
}
nilai++;
}


for(var tambah2 = 1; tambah2 <= 100; tambah2+=2){
  if((tambah2%3)===0){
    document.write(tambah2 + ' KELIPATAN 3');
  }
  else {
    document.write(' ');
  }
}


for(var tambah5 = 1; tambah5 <= 100; tambah5+=5){
  if((tambah5%6)===0){
    document.write(tambah5 + ' KELIPATAN 6');
  }
  else {
    document.write(' ');
  }
}


for(var tambah9 = 1; tambah9 <= 100; tambah9+=9){
  if((tambah9%10)===0){
    document.write(tambah9 + ' KELIPATAN 10');
  }
  else {
    document.write(' ');
  }
}