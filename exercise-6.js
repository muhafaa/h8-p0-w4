function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    for (var i = angka; i >0 ; i--) { // angka menurun
        if (i * i == angka) { // jika akar angka
            return String(String(i)+String(i)).length;
        } else if (angka % i == 0) { // jika dapat dibagi habis
            if (i < angka/i) { // nilai pengali yang paling akhir
                return String(String(angka/i)+String(i)).length;
            }
        }
    }
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2