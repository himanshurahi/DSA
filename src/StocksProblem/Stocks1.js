const arr = [7, 1, 5, 3, 6, 4];
function stock(arr) {
  let maxProfit = 0;
  let minPrice = arr[0];
  for (let i = 0; i < arr.length; i++) {
    minPrice = Math.min(minPrice, arr[i]);
    let profit = arr[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
}

console.log(stock(arr));
