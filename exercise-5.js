function ubahHuruf(kata) {
    // you can only write your code here!
    var obj = {
        abc : 'abcdefghijklmnopqrstuvwxy',
        newWord : ''
    };
    for (var i = 0; i < kata.length; i++) {
        for (var k = 0; k < obj.abc.length; k++) {
            if (kata[i] == obj.abc[k]) {
                obj.newWord += obj.abc[k+1];
                break;
            } else if (kata[i] == 'z') {
                obj.newWord += 'a';
                break;
            }
        }
    }
    return obj.newWord;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu