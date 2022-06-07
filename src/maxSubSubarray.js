//KADEN ALGO
function maxSumSubArray(arr) {
  let currentSum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];
    max = Math.max(currentSum, max);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return max;
}
const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSumSubArray(arr));
