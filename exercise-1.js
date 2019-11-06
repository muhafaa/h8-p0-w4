function angkaPrima(angka) {
    // you can only write your code here!
    while (true) {
        if (angka % 2 == 0 && angka > 2) { // jika angka genap selain 2 maka salah
            return false;
        } else if (angka % 3 == 0 && angka > 3) { // jika angka kelipatan 3 maka salah
            return false;
        } else {
            return true;
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false