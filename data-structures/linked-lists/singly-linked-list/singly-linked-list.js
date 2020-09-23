// Importing the node structure.
const SinglyLinkedListNode = require('./singly-linked-list-node');

// Singly Linked List implementation

class SinglyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
 * @function push
 * @param { any } data : data to store in list.
 * @description : This Fn should take a value and add a node to the end of Singly Linked List.
 * @returns : SinglyLinkedList
 */
  push(data) {
    const node = new SinglyLinkedListNode(data);
    // NOTE: If data adding first time then the head and the tail will be the same node.
    // Setting up head  if null.
    if (!this.head) this.head = node;
    // if head is not null then set the tail(previous node) ref to the new node.
    else this.tail.next = node;
    // Set current node as tail. (new node will always be tail)
    this.tail = node;
    this.length++;
    return this;
  }

  /**
 * @function pop
 * @description : This Fn will remove the node from the end and will setup tail to previous node.
 * @returns : Node removed.
 */
  pop() {
    // Checking if list is not empty
    if (!this.head) return undefined;
    let removedNode;
    // if head and tail is same then list has only one node.
    if (this.head === this.tail) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      // nodes are more then one.
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        // Iterating through list length. and setting up next node as current until tail.
        currentNode = currentNode.next;
      }
      removedNode = currentNode.next;
      // Removing the last node we set up from iteration.
      currentNode.next = null;
      this.tail = currentNode;
    }
    return removedNode;
  }

  shift() { }
}

// const singlyLinkedList = new SinglyLinkedList();

// const da = singlyLinkedList.push(3).push(4).push(5);
// console.log(da);

module.exports = SinglyLinkedList;
