
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


/** Node2: node for a doubly linked list. */

class Node2 {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** DoublyLinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** _get(idx): retrieve node at idx. */
  _get(idx) {
    if (idx <= (this.length-1)/2){
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentIndex < (this.length-1)/2 + 1){
        if (currentIndex === idx){
          return currentNode;
        }
        currentIndex += 1;
        currentNode = currentNode.next;
      }
    }
    else {
      let currentIndex = this.length - 1;
      let currentNode = this.tail;
      while (currentIndex > (this.length-1)/2){
        if (currentIndex === idx){
          return currentNode
        }
        currentIndex -= 1;
        currentNode = currentNode.prev
      }
    }
    throw new Error('Invalid index');
  }
  
  /** push(val): add new value to end of list. */

  push(val) {
    const newNode2 = new Node2(val);
    if (this.head === null){
      this.head = newNode2;
      this.tail = newNode2;
    } else {
      const prevNode = this.tail
      this.tail.next = newNode2;
      this.tail = newNode2;
      this.tail.prev = prevNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node2(val);
    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      newNode.next.prev = newNode;
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
      this.tail = this.tail.prev;
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
      this.head = this.head.next;
      this.head.prev = null;
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
    currentNode.prev = newNode;
    newNode.prev = previousNode;
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
      previousNode.next.prev = previousNode;
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
}

function reverseInPlace(ll){
  if (ll.length === 1){
    return ll;
  }
  if (ll instanceof LinkedList){
    let head = ll.head;
    let tail = ll.tail;
    let currentIdx = ll.length - 1;
    let currentNode = tail;
    while (currentIdx > 0){
      currentNode.next = ll._get(currentIdx - 1);
      currentIdx -= 1;
      currentNode = ll._get(currentIdx);
    }
    ll.head = tail
    ll.tail = head;
    ll.tail.next = null;
    return ll;
  }
  if (ll instanceof DoublyLinkedList){
    console.log('doubly linked list type')
    let head = ll.head;
    let tail = ll.tail;
    let currentIdx = ll.length - 1;
    let currentNode = ll.tail;
    currentNode.next = currentNode.prev;
    currentNode.prev = null;
    currentIdx -= 1;
    currentNode = currentNode.next;
    while (currentIdx > 0){
      let savedNode = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = savedNode;
      currentIdx -= 1;
      currentNode = currentNode.next;
    }
    let savedNode = currentNode.next;
    currentNode.next = null;
    currentNode.prev = savedNode;
    ll.head = tail;
    ll.tail = head;
    return ll;
  }
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


// Doubly linked lists with all the same methods
// function to reverse a linked list in place (do not create a new list)
// function that takes two sorted linked lists and returns a new linked list in sorted order
// pivot a singly linked list around a given value
// create circular array
// create method to rotate circular array