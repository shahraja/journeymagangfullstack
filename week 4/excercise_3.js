var nama = 'Raja';
var peran = 'Ksatria';
var umur = 17;

if (umur < 10) {
  console.log("Maaf adik kecil, tapi umurmu tidak mencukupi untuk memainkan game ini");
}else {
  if (umur <= 35) {
    if (nama !== '') {
      console.log("Selamat datang di Dunia Proxytia " + nama);
      if (peran === 'Ksatria') {
        console.log('Hallo Ksatria ' + nama + 'Kamudapat menyerang dengan senjatamu!');
      }else if(peran === 'Tabib') {
      console.log('Hallo  Tabib' + nama + 'kamu akan membantu temanmu yang terluka.');
    }else if(peran === 'Penyihir') {
      console.log('Hallo  Penyihir' + nama + 'ciptakan keajaiban yang membantu kemenanganmu!');
    }else {
      console.log('Pilih peranmu untuk memulai game!');
    }
    }else {
      console.log("Nama tidak boleh kosong");
    }
  }else {
   console.log("Dengan penuh hormat, orang tua, game ini hanya untuk pemuda pemudi "); 
  }
}
