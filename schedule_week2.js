// QUEUES AND STACKS
class SLNode{
    constructor(value){
      this.value = value
      this.next = null
    }
}

// MON
// LIFO - STACKS

class Stack {
    constructor(items = []) {
      this.items = items;
    }
  
    // Time: O(1)
    // Space: O(1)
    push(item) {
      this.items.push(item);
    }
  
    // Time: O(1)
    // Space: O(1)
    // Returns undefined if empty
    pop() {
      return this.items.pop();
    }
  
    // aka top, returns undefined if empty
    // Time: O(1)
    // Space: O(1)
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Time: O(1)
    // Space: O(1)
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Time: O(1)
    // Space: O(1)
    size() {
      return this.items.length;
    }
  
    // Time: O(n) linear
    // Space: O(n)
    print() {
      const str = this.items.join(" ");
      console.log(str);
      return str;
    }
}

class SLStack {
    constructor() {
        this.head = null;
    }
    push(newVal) {
        // push newVal to top of stack
    }
    pop() {
        // remove and return data at top of stack
    }
    peek() {
        // return data at top of stack without removing
    }
    contains(value) {
        // return true if SLStack contains value
        // return false if SLStack does not contain value
    }
    isEmpty() {
        // return true if SLStack is empty
        // return false if SLStack is not empty
    }
    size() {
        // return length of SLStack
    }
    print() {
        // print out the values of the SLStack
    }
}

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
// FIFO - QUEUES 

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// FRI


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//