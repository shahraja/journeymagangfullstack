var nama = '';
var peran = 'Ksatria';

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
