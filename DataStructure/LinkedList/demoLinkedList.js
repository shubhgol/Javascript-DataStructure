function Node(value) {
    this.value = value;
    this.next = null;
}

// OR
// class Node {
//     constructor(value) {
//         this.name = value;
//         this.next = undefined;
//     }
// }

function LinkedList(value) {
    this.head =  null;
    this.size = 0;
  this.head =   new Node(value);
  return this.head;
}

// OR  
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
// }
const firstNode = new LinkedList(5);
const secNode = new LinkedList(6);
firstNode.next = secNode;
console.log(firstNode.next)