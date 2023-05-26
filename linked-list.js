/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.back = null;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return;
    }
    newNode.back = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      console.log("If no first value, add to head and tail.");
      return;
    }
    this.head.back = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    console.log("If first value, assign to newNode.next");
    return;
  }

  /** pop(): return & remove last item. */
  pop() {
    const lastItem = this.tail;
    if (lastItem === null) {
      console.log("If last item is null, return -1");
      return -1;
    }
    const secondLastItem = lastItem.back;
    if (secondLastItem === null) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      console.log(
        "If secondLastItem null, set head/tail null return lastItem val."
      );
      return lastItem.val;
    }
    console.log(secondLastItem);
    secondLastItem.next = null;
    this.tail = secondLastItem;
    this.length -= 1;
    console.log(lastItem.val);
    console.log("Set secondLastItem.next to null and return lastItem val");
    return lastItem.val;
  }

  /** shift(): return & remove first item. */
  shift() {
    const firstItem = this.head;
    if (firstItem === null) {
      console.log("If first item is null, return -1");
      return -1;
    }
    const secondItem = firstItem.next;
    if (secondItem === null) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      console.log(
        "If secondItem null, set head/tail null return firstItem val."
      );
      return firstItem.val;
    }
    secondItem.back = null;
    this.head = secondItem;
    this.length -= 1;
    console.log("Set secondItem.back to null and return firstItem val");
    return firstItem.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    let item = this.head;
    while (count !== idx) {
      item = item.next;
      count += 1;
    }
    return item.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
