function urutkanAbjad(str) {
  // you can only write your code here!
    var temp = [];
    for (var i = 0; i < str.length; i++) { // split str
      temp.push(str[i]);
    }

    var tempStr = temp[0];
    for (i = 0; i < temp.length-1; i++) { // sort temp
      for (var j = 0; j < (temp.length-1)-i; j++) {
        if (temp[j] > temp[j+1]) {
          tempStr = temp[j];
          temp[j] = temp[j+1];
          temp[j+1] = tempStr;
        }
      }
    }
    str = '';
    for (var s = 0; s < temp.length; s++) { // masukkan temp ke str
        str += temp[s];
    }
    return str;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'