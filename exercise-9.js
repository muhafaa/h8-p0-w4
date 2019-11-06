function checkAB(str) {
    // you can only write your code here!
    var temp = false;
    
    for (var index = 0;index <= str.length;index++) {
        switch (str[index]) { 
            case 'a':
                if(str[index+4] == 'b'){ // jika a ketemu b jarak 3 karakter
                    return true;
                }
                break;
                
            case 'b':
                if(str[index+4] == 'a'){ // jika b ketemu a jarak 3 karakter
                    return true;
                }
                break;
        }
    }
    return temp;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false