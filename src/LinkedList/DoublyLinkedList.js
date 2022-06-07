class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) return undefined;
    let newTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = newTail.prev;
    this.tail.next = null;
    this.length--;
  }
  shift() {
    //remove from start
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = temp.next;
    this.head.prev = null;
    // temp.next = null; to print in console
    this.length--;
  }
  unshift(val) {
    //add to start
    let newNode = new Node(val);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  get(index) {
    //getting node from particular index
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (count != index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(val, index) {
    //update the node at index
    let node = this.get(index);
    if (node) {
      node.val = val;
    }
  }
  insert(val, index) {
    if (index === 0) {
      this.unshift(val);
      return;
    }
    if (index === this.length) {
      this.push(val);
      return;
    }
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
  }
  remove(index) {
    if (index === 0) {
      this.shift();
      return;
    }
    if (index === this.length) {
      this.pop();
      return;
    }
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
  }
}
const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.remove(1);
console.log(list.head);
