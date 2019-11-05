function cariModus(arr) {
  // you can only write your code here!
  var newObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (newObj[arr[i]] == undefined) {
        newObj[arr[i]] = 1;
    }  else {
        newObj[arr[i]]+= 1;
    }
  }

  var modus = 0;
  var temp = 0;
  for (var key in newObj) {
    if (temp < newObj[key]) {
        temp = newObj[key];
        modus = key; 
    }    
  }

  if (Object.keys(newObj).length <= 1 || modus == 1) {
      return -1;
  } else {
      return Number(modus);
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1