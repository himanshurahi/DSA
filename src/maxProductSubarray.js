const arr = [6, -3, -10, 0, 2];
function maxProductSubarray(arr) {
  let max = arr[0];
  let min = arr[0];
  let ans = 0;
  let startIndex = 0;
  let endIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    // i need to get subarray
    //swap
    if (arr[i] < 0) {
      let temp = max;
      max = min;
      min = temp;
      // console.log(`swaping = ${max} - ${min}`);
    }
    // console.warn(`max = Math.max(${arr[i]}, ${arr[i]} * ${max})`);
    // console.error(`min = Math.min(${arr[i]}, ${arr[i]} * ${min})`);
    max = Math.max(arr[i], arr[i] * max);
    min = Math.min(arr[i], arr[i] * min);
    // console.log(`max = ${max}, min = ${min}, ans = ${ans}`);
    if (max > ans) {
      endIndex = i;
      ans = max;
    }
  }
  console.log(startIndex, endIndex);
  return ans;
}
console.log(maxProductSubarray(arr));
