
/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
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

  /** _get(idx): retrieve node at idx. */
  _get(idx) {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== idx && currentIndex !== null){
      currentIndex += 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  }


  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return undefined;
    const value = this.tail.val;
    if (this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this._get(this.length-2);
      this.tail.next = null;
    }
    this.length -= 1;
    return value;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) return undefined;
    const value = this.head.val;
    if (this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next
    }
    this.length -= 1;
    return value;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0){
      throw new Error('Invalid index');
    }
    const currentNode = this._get(idx);
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0){
      throw new Error('Invalid index');
    }
    const currentNode = this._get(idx);
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0){
      throw new Error('Invalid index');
    } 
  
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
  
    const newNode = new Node(val);
    const currentNode = this._get(idx);
    const previousNode = this._get(idx - 1);
    previousNode.next = newNode
    newNode.next = currentNode;
    this.length += 1;
    }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0){
      throw new Error('Invalid index');
    }
    if (idx === this.length-1) return this.pop();
    if (idx === 0) return this.shift();
    else {
      const previousNode = this._get(idx-1);
      const value = previousNode.next.val;
      previousNode.next = previousNode.next.next;
      this.length -= 1;
      return value;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return undefined;
    let sum = 0;
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < this.length){
      sum = sum + currentNode.val;
      currentIndex += 1;
      currentNode = currentNode.next;
    }
    return sum / this.length;
  }

  pivot(val) {

  }
}

/** DoublyLinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
  }

  /** push(val): add new value to end of list. */

  push(val) {

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

  }

  /** pop(): return & remove last item. */

  pop() {

  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

function reverseInPlace(ll){

}

function sort(a, b){

}

class CircularArray {
  constructor(){

  }

  printArray(){

  }

  getByIndex(){

  }

  addItem(){

  }

  rotate(){

  }
}
