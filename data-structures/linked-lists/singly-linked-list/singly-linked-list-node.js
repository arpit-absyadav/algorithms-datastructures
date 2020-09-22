/**
 * @class : SinglyLinkedListNode
 * @description : This class is a structure of linked list.
 * @param { any } data : data to store.
 * @param { SinglyLinkedListNode } next : reference to the next node.
 * @example :
 * __________________
 * |  data | next   |--> ref to next
 * ------------------
 */

module.exports = class SinglyLinkedListNode {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
};
