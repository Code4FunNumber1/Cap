// Part 1 Class
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        this.items.pop();
        }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}

// Part 2 Class
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.unshift(element);
    }

    dequeue() {
        this.items.shift();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}

// Part 3 Classes
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
    constructor() {this.head = null}

    push(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
       }
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    toArray() {
        let arr = [];
        let current = this.head;
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}


// Part 1 testing
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack.size());

// Part 2 testing
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.dequeue();
console.log(queue.size());

// Part 3 testing
const myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
console.log(myLinkedList.toArray());
myLinkedList.prepend(0);
console.log(myLinkedList.toArray());

// Part 4
const mySet = new Set([1, 2, 2, 3, 4]);
console.log(mySet);

const prices = new Map();
prices.set("rope", 8);
prices.set("torch", 10);
for (const [k, v] of prices) {
    console.log(`${k}: ${v}`);
}

// const obj = {
//     rope: 8,
//     torch: 10
// }
// for (const [k, v] of obj) {
//     console.log(`${k}: ${v}`);
// }