function ubahHuruf(kata) {
    // you can only write your code here!
    var abjad = 'abcdefghijklmnopqrstuvwxy';
    var newWord = '';
    for (var i = 0; i < kata.length; i++) {
        for (var k = 0; k < abjad.length; k++) { //sesuaikan kata dengan abjad
            if (kata[i] == abjad[k]) { // jika sama
                newWord += abjad[k+1]; // ganti ke abjad berikutnya
                break;
            } else if (kata[i] == 'z') { // jika z maka a
                newWord += 'a';
                break;
            }
        }
    }
    return newWord;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu