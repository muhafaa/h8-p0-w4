function shoppingTime(memberId, money) {
  // you can only write your code here!
  if (memberId == undefined || memberId == '') {  //validasi
      return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money < 50000) {
      return 'Mohon maaf, uang tidak cukup';
  }

  var obj ={
      memberId : memberId,
      money : money,
      listPurchased : [],
      changeMoney : 0
  };
  var sale = [                              //daftar sale
    ['Sepatu Stacattu', 1500000], 
    ['Baju Zoro', 175000], 
    ['Baju H&N', 250000], 
    ['Sweater Uniklooh', 500000], 
    ['Casing Handphone', 50000]
  ];
  var change = money;    

  for (var i = 0; i < sale.length; i++) {   // loop sale
    if (change - sale[i][1] >= 0) {         // jika uang cukup untuk beli barang sale
        change -= sale[i][1];               // cari sosokan
        obj.changeMoney = change;       
        obj.listPurchased.push(sale[i][0]); // input barang ke daftar belanja
    }
  }
  return obj;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja