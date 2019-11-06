function cariModus(arr) {
  // you can only write your code here!
  var newObj = {};
  for (var i = 0; i < arr.length; i++) {  // masukkan nilai arr ke objek
    if (newObj[arr[i]] == undefined) {    // jika key blm ada
        newObj[arr[i]] = 1;
    }  else {                             // jika sdh ada
        newObj[arr[i]] += 1;
    }
  }

  var maxValue = 0;
  for (var key in newObj) { // cari nilai paling besar dari objek
    if (maxValue < newObj[key]) {
      maxValue = newObj[key];
    } 
  }

  var modus = [];
  for (key in newObj) { // masukkan setiap key yg memiliki nilai = maxValue
    if (maxValue == newObj[key]) {
      modus.push(key);
    }
  }

  if (Object.keys(newObj).length <= 1 || maxValue == 1) { //validasi jika panjang dari objek <= 1 atau nilai paling besar cuma 1
      return -1;
  }
  
  for (var j = 0; j < arr.length; j++) { // cari nilai modus yg duluan muncul
    for (var k = 0; k < modus.length; k++) {
      if (arr[j] == modus[k]) {
        return modus[k];
      }
    }
  }
  
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1