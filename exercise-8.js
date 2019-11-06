function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var newStr = '';
    for (var index = 0; index < kalimat.length; index++) {
        if (kalimat[index] == kalimat[index].toUpperCase()) { // jika huruf besar
            newStr += kalimat[index].toLowerCase();
        } else {                                              // jika huruf kecil
            newStr += kalimat[index].toUpperCase();
        }
    }
    return newStr;
}
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"