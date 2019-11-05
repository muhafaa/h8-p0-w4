function urutkanAbjad(str) {
  // you can only write your code here!
    var temp = str.split('');
    temp.sort();
    str = '';
    for (var s = 0; s < temp.length; s++) {
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