function fpb(angka1, angka2) {
  // you can only write your code here!
  var result = 0;
  var max = null;
  if (angka1 > angka2) { // bandingkan nilai mana yang lebih besar
    max = angka1;
  } else {
    max = angka2;
  }
  for (var i = max; i > 0; i--) { // mencari bilangan yang dapat membagi habis kedua nilai
      if (angka1 % i == 0 && angka2 % i == 0) {
          return i;
      }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1