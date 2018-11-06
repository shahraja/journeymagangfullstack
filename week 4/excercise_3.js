var nama = 'raja';
var peran = 'Tabib';
var umur = 12;

if (umur < 10) {
  console.log("Maaf adik kecil, tapi umurmu tidak mencukupi untuk memainkan game ini");
}
else if (umur >= 35) {
  console.log("Dengan penuh hormat, orang tua, game ini hanya untuk pemuda pemudi ");
}
else {
  console.log("Selamat datang di game ini " + nama);
}
if (nama) {
  console.log("Hallo " + nama);
}
else {
  console.log("Nama gaboleh kosong!");
}
if (peran === 'Ksatria') {
  console.log("kamu dapat menyerang dengan senjatamu!");
}
else if (peran === 'Tabib') {
  console.log("kamu akan membantu temanmu yang terluka.");
}
else if (peran === 'Penyihir') {
  console.log("ciptakan keajaiban yang membantu kemenanganmu!");
}
else{
  console.log("Pilih peranmu untuk memulai game!");
}