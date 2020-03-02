/**
 * Linked List Data Structure | JavaScript - Traversy Media
 * Youtube link: https://www.youtube.com/watch?v=ZBdE8DElQQU&t=1265s
 */

const n1 = { data: 100 };
const n2 = { data: 200 };
n1.next = n2;
console.dir(`${"-".repeat(10)} Linked List Node exapmle ${"-".repeat(10)}`);
console.log("Node", n1);
console.table(n1);

// OOPS programming Paradiagm
class Node {
  // Default arguments
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Functional programming paradiagm

function FNode(data, next = null) {
  this.data = data;
  this.next = next;
}
const classNode = new Node(100);
const funcNode = new FNode(100);
console.dir(`${"*".repeat(10)} OOPS programming paradiagm ${"*".repeat(10)}`);
console.log("📁  Class Node", classNode);
console.dir(
  `${"*".repeat(10)} Functional programming paradiagm ${"*".repeat(10)}`
);
console.log("🗂  Functional Node", funcNode);

// Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    //   if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // Insert at index
  insertAt(data, index) {
    //   if index is out of range
    if (index > 0 && index > this.size) return;
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    if (index === this.size) {
      this.insertLast(data);
      return;
    }
    const node = new Node(data);
    let current, previous;
    // set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after the index
    }
    node.next = current;
    previous.next = node;
  }
  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(`getAt index ${index} is : `, current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) return;
    let current = this.head;
    let previous;
    let count = 0;
    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
console.dir(`${"#".repeat(10)} Linked lists examples ${"#".repeat(10)}`);
const ll = new LinkedList();
console.dir(`${"%".repeat(10)} New empty Linked lists ${"%".repeat(10)}`);
console.log(ll);
ll.insertFirst(100);
console.dir(`${"%".repeat(10)} insertFirst Linked lists ${"%".repeat(10)}`);
console.log(ll);
ll.insertFirst(200);
console.dir(`${"%".repeat(10)} insertFirst Linked lists ${"%".repeat(10)}`);
console.log(ll);
console.dir(`${"%".repeat(10)} printListData Linked lists ${"%".repeat(10)}`);
console.log(ll.printListData());
ll.insertLast(300);
console.dir(`${"%".repeat(10)} insertLast Linked lists ${"%".repeat(10)}`);
console.dir(ll);
console.dir(`${"%".repeat(10)} printListData Linked lists ${"%".repeat(10)}`);
console.log(ll.printListData());
ll.insertAt(400, 2);
console.dir(`${"%".repeat(10)} insertAt second Linked lists ${"%".repeat(10)}`);
console.log(ll);
console.dir(`${"%".repeat(10)} printListData Linked lists ${"%".repeat(10)}`);
console.log(ll.printListData());
ll.getAt(2);
ll.removeAt(2);
console.dir(`${"%".repeat(10)} removeAt second Linked lists ${"%".repeat(10)}`);
console.log(ll);
console.dir(`${"%".repeat(10)} printListData Linked lists ${"%".repeat(10)}`);
console.log(ll.printListData());
ll.clearList();
console.dir(`${"%".repeat(10)} clearList Linked lists ${"%".repeat(10)}`);
console.log(ll.printListData());
