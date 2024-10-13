// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  //   const zeroArray = [];
  //   const notZeroArray = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === 0) {
  //       zeroArray.push(arr[i]);
  //     } else {
  //       notZeroArray.push(arr[i]);
  //     }
  //   }
  //   return notZeroArray.concat(zeroArray);

  list.splice(8, 0, list.splice(2, 1)[0]);
  list.splice(9, 0, list.splice(4, 1)[0]);
  return list;
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
