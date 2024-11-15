import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
  }
  clear() {
    this.head = null; // empties out the list
  }
  prepend(value) {
    let tmp = null;
    if (this.head != null) tmp = this.head; // ref is at node head
    this.head = new Node(value); // create new node for head node
    this.head.nextNode = tmp; // traverses ref onto next node
  }
  append(value) {
    if (this.head == null)
      this.prepend(value); // if node head not present, prepend as head node
    else {
      let tmp = this.head; // starts at head node
      while (tmp.nextNode != null) tmp = tmp.nextNode; // as long as not null, traverses to next node
      tmp.nextNode = new Node(value); // creates new Node for next node in sequence
    }
  }
  size() {
    let count = 0;
    let tmp = this.head; // starts from top
    while (tmp != null) {
      // as long as end not reached
      count++; // increment count
      tmp = tmp.nextNode; // traverse onto next node
    }
    return count; // give total
  }
  getHead() {
    return this.head; // gives node head
  }
  getTail() {
    let tmp = this.head;
    while (tmp.nextNode != null) tmp = tmp.nextNode; // keeps traversing through unitl next ref is null
    return tmp; // returns last node
  }
  at(index) {
    let tmp = this.head; // start from beginning
    for (let i = 0; i < index; i++) {
      // will loop through up until given index input
      tmp = tmp.nextNode; // traverse through
      if (tmp == null) return "ERROR: Item at this index does not exist!"; // if no item present at this index
    }
    return tmp; // returns node we traversed to at the index
  }
  popLast() {
    let currentNode = this.head; // start from front of list
    let previousNode = null;
    while (currentNode.nextNode != null) {
      // iterates through to tail node
      previousNode = currentNode; // second to last node becomes tail node
      currentNode = currentNode.nextNode; // current node becomes null after tail
    }
    previousNode.nextNode = null; // tail node now deleted
  }
  contains(value) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  }
  find(value) {
    // returns index of node containing value
    let tmp = this.head; // start from top
    let index = 0; // initialise count
    while (tmp != null) {
      if (tmp.value === value) return true;
      index++; // incrment index count
      tmp = tmp.nextNode; // traverse through seq
    }
    return false; // if value not present, exit as false
  }
  toString() {
    let tmp = this.head;
    let stringyList = ""; // intitalise a list of str values
    while (tmp != null) {
      stringyList += `(${tmp.value}) -> `; // append node (value) + -> to string list
      tmp = tmp.nextNode; // continue traversal
    }
    return (stringyList += "null"); // append null at end
  }
  insertAt(value, index) {
    if (this.head == null) this.prepend(value); // if head node doesn't exist, insert node at head
    let currentNode = this.head;
    let previousNode = null;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode; // new Node will be allocated inbetween prev & curr node
      currentNode = currentNode.nextNode;
      if (currentNode == null) break; // if index exceeds list length, add node to last index of list
    }
    let tmp = new Node(value); // create the new node
    previousNode.nextNode = tmp; // push new node in after previous node
    tmp.nextNode = currentNode; // next node after new one has been allocated as the current node (already assigned as next node in seq)
  }
  removeAt(index) {
    if (this.head === null)
      return "There is no item to remove as list is empty";
    let currentNode = this.head; // start at the head of the list
    let previousNode = null;
    for (let i = 0; i < index; i++) {
      // iterate through
      // will loop through up until given index input
      previousNode = currentNode; // this sets the node to be deleted here
      currentNode = currentNode.nextNode; // the following node in sequence
      if (currentNode == null) return "ERROR: Item at this index does not exist!"; // can't remove item at index exceeding list length
    }
    previousNode.nextNode = currentNode.nextNode; // skips the node to be deleted
  }
}
