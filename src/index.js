console.clear();
function arrayRotate(arr) {
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(arrayRotate(arr));
