class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }
    let current = this.root;
    let newNode = new Node(val);
    while (true) {
      if (val === current.val) {
        return false;
      }
      if (val < current.val) {
        //left side
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      } else {
        //right side
        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }
  find(val) {
    let current = this.root;
    let found = false;
    while (current) {
      if (current.val === val) {
        found = true;
      }
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return found;
  }
  BFS() {
    let data = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    console.log(data);
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(11);
tree.insert(9);
tree.insert(5);
tree.insert(1);
tree.insert(7);
//         10
//      9      11
//    5
//  1   7
// tree.BFS();
// tree.root = new Node(10);
// tree.root.left = new Node(7);
// tree.root.right = new Node(15);
// tree.root.left.right = new Node(9);
// tree.root.left.left = new Node(4);
console.log(tree);
