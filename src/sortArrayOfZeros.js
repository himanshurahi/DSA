const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

function sort(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  function swap(idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  while (mid <= high) {
    // console.log(
    //   `midElem ${arr[mid]}, low ${low}, mid ${mid}, high ${high}\n Array : ${arr}`
    // );
    if (arr[mid] === 0) {
      swap(low, mid);
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      swap(high, mid);
      high--;
    }
  }
  console.log(arr);
}
sort(arr);

function getInput(string) {
  let count = {};
  return (string) => {
    if (count[string]) {
      return "Yes";
    } else {
      count[string] = 1;
      return "No";
    }
  };
}

let check = getInput();
console.log(check("rahi"));
