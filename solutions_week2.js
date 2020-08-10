class LinkedListStack {
    constructor() {
      this.head = null;
    }
  
    // add to top (add new head)
    // Time: O(1) constant
    // Space: O(1)
    push(val) {
      const newNode = new Node(val);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
  
    // remove from top, (remove head)
    // Time: O(1) constant
    // Space: O(1)
    pop() {
      if (this.head === null) {
        return null;
      }
  
      const removed = this.head;
      this.head = this.head.next;
  
      return removed.data;
    }
  
    // aka top
    // Time: O(1) constant
    // Space: O(1)
    peek() {
      return this.head ? this.head.data : null;
    }
  
    // Time: O(n) linear, n = list length
    // Space: O(1)
    contains(val) {
      let runner = this.head;
  
      while (runner) {
        if (runner.data === val) {
          return true;
        }
        runner = runner.next;
      }
      return false;
    }
  
    // Time: O(1) constant
    // Space: O(1)
    isEmpty() {
      return this.head === null;
    }
  
    // Time: O(n) linear, n = list length
    // Space: O(1)
    size() {
      let len = 0;
      let runner = this.head;
  
      while (runner) {
        len += 1;
        runner = runner.next;
      }
      return len;
    }
  
    // Time: O(n) linear, n = list length
    // Space: O(n)
    print() {
      let runner = this.head;
      let vals = "";
  
      while (runner) {
        vals += `${runner.data}${runner.next ? ", " : ""}`;
        runner = runner.next;
      }
      console.log(vals);
      return vals;
    }
  }