//for this we need to implement reverse array function first
function reverse(arr, start = 0, end = arr.length - 1) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
function rotate(arr, k) {
  k = k % arr.length;
  reverse(arr);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  console.log(arr);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 1);
