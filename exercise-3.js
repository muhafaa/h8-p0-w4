function cariMedian(arr) {
    // you can only write your code here!
    if (arr.length % 2 == 0) { // genap
        return (arr[arr.length/2] + arr[(arr.length/2)-1])/2; // ambil 2 nilai pada index tengah arr
    } else { // ganjil
        return arr[Math.floor(arr.length/2)]; //ambil nilai pada index tengah arr
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5