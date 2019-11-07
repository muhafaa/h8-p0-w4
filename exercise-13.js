function deepSum (arr) {
  // Code disini
  if (arr.length == 0) {    // validasi arr kosong
      return 'No number';
  }

  var sum = 0;
  for (var one = 0; one < arr.length; one++) {      
      for (var two = 0; two < arr[one].length; two++) {
          for (var index = 0; index < arr[one][two].length; index++) {
              sum += arr[one][two][index];
          }
      }
  }
  return sum;
}

//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number