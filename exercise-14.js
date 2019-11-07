function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if (arrPenumpang.length == 0) {   // validasi arr kosong
      return [];
  }
  var hasil = [];
  var naik = 0;
  var turun = 0;

  for (var i = 0; i < arrPenumpang.length; i++) {   // loop arrPenumpang
      naik = arrPenumpang[i][1];
      turun = arrPenumpang[i][2];
      count = 0;
      hasil.push({                               // bikin objek
          penumpang : arrPenumpang[i][0],
          naikDari : naik,
          tujuan : turun,
          bayar : 0
      });
      for (var index = 0; index < rute.length; index++) {   // loop rute
          if (rute[index] == naik) {        // mulai naik
              naik = true;
          } else if (naik == true) {        // pembayaran meningkat setiap ganti rute
            hasil[i].bayar += 2000;
          }

          if (rute[index] == turun) {       // tiba di tujuan
              break;
          }
      }
  }
  return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]