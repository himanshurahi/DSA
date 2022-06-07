class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    let current = this.head;
    let newTail = null;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
  }
  shift() {
    let temp = this.head.next;
    this.head = temp;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
  }
  unshift(val) {
    let newNode = new node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  get(index) {
    if (index > this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index == this.length) {
      this.push(val);
      return true;
    }
    if (index == 0) {
      this.unshift(val);
      return true;
    }
    let newNode = new node(val);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }
}
let list = new singlyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
// list.insert(1, "pro")
// console.log(list)
list.pop();
console.log(list.print());
// console.log(list)
