//          91
//   66            64
// 46  44       41   40
class MaxBinaryHeap {
  constructor() {
    this.values = [10, 5, 3, 2, 1];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (element <= this.values[parentIndex]) return;
      if (element > this.values[parentIndex]) {
        let temp = this.values[parentIndex];
        this.values[index] = temp;
        this.values[parentIndex] = element;
        index = parentIndex;
      }
    }
  }
  extractMax() {
    //remove
    let max = this.values[0];
    //for last elem this is some kind of loop
    let end = this.values.pop();
    if (this.values.length === 0) {
      return undefined;
    }
    this.values[0] = end;
    this.bubbleDown();
  }

  swap(index1, index2) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }
  bubbleDown() {
    let idx = 0;
    let length = this.values.length;
    let elem = this.values[idx];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > elem) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap == null && rightChild > elem) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap == null) break;
      //swap node
      this.values[idx] = this.values[swap];
      this.values[swap] = elem;
      idx = swap;
    }
  }
}
// [91,66,64,46,44,41,40]
// 10, 5, 3, 2, 1
let heap = new MaxBinaryHeap();
heap.extractMax();
console.log(heap.values);
