/**
 * Linked Lists | Data Structures in JavaScript -  beiatrix
 * Youtube link: https://www.youtube.com/watch?v=ChWWEncl76Y
 * Singly Linked list, Doubly linked list , circular linked list
 * Sequential access, fast adding and removing node, no direct acces unlike an array
 */

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }
  //   add to end of list / tail
  append(value) {
    //   if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }
  //   add to begining of list / head
  prepend(value) {
    //   if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }
  //   Removing head
  deletHead() {
    //   if list is empty
    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;
      // if one node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removedHead.value;
    }
  }
  // removing tail
  deleteTail() {
    //   if list is empty
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;
      //   if one node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail.value;
    }
  }
  // searching
  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

class Node {
  // Default value
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = prev || null;
  }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list);

list.prepend(0);
list.prepend(-1);

console.log(list);

console.log(list.search(1));
console.log(list.search(3));
console.log(list.search(999));

list.deletHead();
console.log(list);
list.deleteTail();
console.log(list);
