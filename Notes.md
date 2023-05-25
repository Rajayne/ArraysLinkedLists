# Notes

## Lists

### Linked List with Node Class

```
---------
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const firstPage = new Node('page1.com')
const secondPage = new Node('page2.com')
const thirdPage = new Node('page3.com')

firstPage.next = secondPage
secondPage.next = thirdPage
```

### Passing Next In Node Class

```
class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = null;
  }
}

const firstPage =
  new Node('page1.com',
    new Node('page2.com',
      new Node('page3.com')));
```

## Linked List Class

```
class LinkedList {
  constructor() {
    this.head = null;
  }
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val)
      currentNode = currentNode.next;
    }
  }
  find(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode === val) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
  append(val) {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = new Node(val)
  }
}
```

> > Update Linked List to track tail for appending!

```
class LinkedList {
  constructor() {
    this.head = null;
    this.head = null;
  }
  append(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
```

## Arrays

### Linear Search

```
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === target) return i
  }
  return -1;
}
```

### Binary Search

```
function binarySearch(arr, val) {
let leftIdx = 0;
let rightIdx = arr.length;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx)/2);
    let middleVal = arr[middleIdx];
    if (middleVal < val) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
      return arr[middleIdx]
    }
  }
  return -1;
}
```
