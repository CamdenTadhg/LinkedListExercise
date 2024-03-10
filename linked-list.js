
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

    /** pivot(): given a value and a linked list, rearrange the items so that all the items with values less than the given value are in the first half, and items with values greater than or equal to the given value are in the second half. */
  pivot(val) {
    let currentIdx = 0;
    let secondHalf = new LinkedList([])
    while (currentIdx < this.length){
      if (this.getAt(currentIdx) >= val){
        let savedVal = this.removeAt(currentIdx);
        secondHalf.push(savedVal)
      } else {
        currentIdx += 1;
      }
    }
    this.tail.next = secondHalf.head;
    this.length = this.length + secondHalf.length;
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
  //method if the list is a singly linked list
  if (ll instanceof LinkedList){
    let current = ll.head;
    let prev = null;

    //flip list
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    //switch head and tail
    let head = ll.head;
    ll.head = prev;
    ll.head = ll.tail;
    ll.tail = head;
    return ll;
  }
  if (ll instanceof DoublyLinkedList){
    //method if the list is a doubly linked list
    let head = ll.head;
    let tail = ll.tail;
    let current = ll.head;
    
    //flip list
    while (current) {
      let next = current.next;
      current.next = current.prev;
      current.prev = next;
      current = next;
    }

    //switch head and tail
    ll.head = tail;
    ll.tail = head;
    return ll;
  }
}

function sortlist(a, b, sortedList){
  //sorting algorithm for all list types
  let currentA = a.head;
  let currentB = b.head; 
  //sort values inside lists
  while(currentA && currentB){
    if (currentA.val <= currentB.val){
      console.log('while A <= B')
      console.log('currentA = ', currentA);
      console.log('currentB = ', currentB);
      sortedList.push(currentA.val);
      currentA = currentA.next;
    } else if (currentB.val < currentA.val){
      console.log('while B < A');
      console.log('currentA = ', currentA);
      console.log('currentB = ', currentB);
      sortedList.push(currentB.val);
      currentB = currentB.next;
    }
  }
  //fill in a values if a list contains final values
  if (currentA){
    while (currentA) {
      console.log('final As');
      console.log('currentA = ', currentA);
      console.log('currentB = ', currentB);
      sortedList.push(currentA.val);
      currentA = currentA.next;
    }
    //fill in b values if b list contains final values
  } else if (currentB){
    while (currentB) {
      console.log('finalBs')
      console.log('currentA = ', currentA);
      console.log('currentB = ', currentB);
      sortedList.push(currentB.val);
      currentB = currentB.next;
    }
  }
  return sortedList;
}

function sort(a, b){
  //handler for sorting different types of linked lists
  if (a instanceof LinkedList && b instanceof LinkedList){
    let sortedList = new LinkedList([]);
    return sortlist(a, b, sortedList);
  } else if (a instanceof DoublyLinkedList && b instanceof DoublyLinkedList){
    let sortedList = new DoublyLinkedList([]);
    return sortlist(a, b, sortedList);
  }
  else {throw new Error('lists must be of the same type')
  }
}

class CircularArray {
  constructor(capacity){
    this.array = new Array(capacity);
    this.capacity = capacity;
    this.length = 0;
    this.startIndex = 0;
  }

  addItem(val){
    let currentIndex = this.startIndex;
    let counter = 0;
    while (counter <= this.capacity - 1){
      if (!this.getByIndex(currentIndex)){
        this.setByIndex(currentIndex, val);
        this.length += 1;
        return this;
      }
      currentIndex += 1;
      counter += 1;
    }
    throw new Error('CircularArray is full');
  }

  printArray(){
    for (let item in this.array){
      console.log(this.array[item]);
    }
  }

  getByIndex(idx){
    if (this.length === 0){
      return undefined;
    } else {
      const convertedIdx = (this.startIndex + idx) % this.capacity;
      return this.array[convertedIdx];
    }
  }

  setByIndex(idx, val){
    if (this.length === 0){
      this.array[this.startIndex] = val;
    } else {
      const convertedIdx = (this.startIndex + idx) % this.capacity;
      this.array[convertedIdx] = val;
    }
  }
 //rotates circular array into higher values with positive numbers and lower values with negative numbers. 
  rotate(val){
    if (val === 0){
      return;
    }
    if (val > 0) {
      const rotationFactor = (this.capacity + val) % this.capacity;
      this.reverse(this.startIndex, this.startIndex + rotationFactor);
      this.reverse(this.startIndex + rotationFactor + 1, this.capacity - 1);
      this.reverse(this.startIndex + 1, this.capacity - 1)
    }
    if (val < 0) {
      const rotationFactor = (this.capacity - val) % this.capacity;
      this.reverse(this.startIndex, this.capacity - 1);
      this.reverse(this.startIndex, this.startIndex + rotationFactor - 1);
      this.reverse(this.startIndex + rotationFactor, this.capacity - 1);
    }
  }

  //given a start and end index, reverses that section of the array
  reverse(start, end){
    if (start < 0 || end > this.capacity - 1){
      throw new Error('entries outside array capacity.')
    }
    while (start < end){
      const temp = this.array[start];
      this.array[start] = this.array[end];
      this.array[end] = temp;
      start += 1;
      end -= 1;
    }
  }
}