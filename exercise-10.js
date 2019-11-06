function changeMe(arr) {
    // you can only write your code here!
    if (arr.length == 0) { // jika array kosong
      return console.log("");
    }
    var year = new Date().getFullYear(); // tahun sekarang
    var obj = [{},{}];
    for (var i = 0; i < arr.length; i++) { // masukkan data dari arr ke obj
      obj[i].firstName = arr[i][0];
      obj[i].lastName = arr[i][1];
      obj[i].gender = arr[i][2];
      if (arr[i][3] != undefined) { // jika value tahun ada
        obj[i].age = year - arr[i][3];
      } else {                      // jika tidak ada
        obj[i].age = 'Invalid Birth Year';
      }
    }

    for (i = 0; i < obj.length; i++) { // log obj
      console.log(i+1+'. '+obj[i].firstName+' '+obj[i].lastName+':');
      console.log(obj[i]);
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""