(function (...arr) {
  let even = [];
  for (let i in arr) {
    if (arr[i] % 2 == 1) {
      even.push(arr[i]);
    }
  }
  console.log(even);
})(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //calling
// console.log(even);
