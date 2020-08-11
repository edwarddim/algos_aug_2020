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



  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedListQueue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Time: O(1) constant
    // Space: O(1)
    isEmpty() {
      return this.head === null;
    }
  
    // Time: O(1) constant
    // Space: O(1)
    enqueue(val) {
      const newTail = new Node(val);
  
      if (this.isEmpty()) {
        this.head = newTail;
        this.tail = newTail;
      } else {
        this.tail.next = newTail;
        this.tail = newTail;
      }
      // pre-increment so the new size is returned otherwise old size is returned
      return ++this.size;
    }
  
    // Time: O(1) constant
    // Space: O(1)
    dequeue() {
      // remove head
      if (!this.head) {
        return null;
      }
  
      const dequeued = this.head;
      this.head = this.head.next;
  
      if (this.head === null) {
        this.tail = null;
      }
  
      this.size--;
      return dequeued.data;
    }
  
    // Time: O(1) constant
    // Space: O(1)
    front() {
      return this.head ? this.head.data : null;
    }
  
    // Time: O(n) linear
    // Space: O(1)
    contains(val) {
      let runner = this.head;
  
      while (runner) {
        if (runner.val === val) return true;
        runner = runner.next;
      }
      return false;
    }
  
    // Time: O(n) linear
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
  
    // Time: O(n) linear since enqueue is O(1), n = vals.length
    // Space: O(1)
    seed(vals) {
      vals.forEach((val) => this.enqueue(val));
    }
  }

  isPalindrome() {
    let isPalin = true;
    const stack = new Stack(),
      len = this.size();

    for (let i = 0; i < len; i++) {
      let dequeued = this.dequeue();
      stack.push(dequeued);
      this.enqueue(dequeued);
    }

    for (let i = 0; i < len; i++) {
      let dequeued = this.dequeue();
      let popped = stack.pop();

      if (popped !== dequeued) {
        isPalin = false;
      }

      this.enqueue(dequeued);
    }
    return isPalin;
  }