class SLNode{
    constructor(value){
      this.value = value
      this.next = null
    }
}

class SLStack {
    constructor() {
        this.head = null;
    }
    push(newVal) {
        // push newVal to top of stack
        var newNode = new SLNode(newVal)
        if (this.head != null){
            this.head = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
    
    }
    pop() {
        // remove and return data at top of stack
        if (this.head != null){
            var tempHead = this.head.value
            if (this.head.next != null){
                this.head = this.head.next
                this.head.next = null
            }
            this.head = null;
            return tempHead
        }
    }
    
    peek() {
        // return data at top of stack without removing
        if (list.head != null){
            return list.head.value
        }
    }

    contains(value) {
        // return true if SLStack contains value
        // return false if SLStack does not contain value
        if (this.head !=null){
            var runner = this.head;
            while(runner.next !=null){
                if(runner.value ==value){
                    return true
                    runner = runner.next
                }
            }
            if (runner.value == value){
                return true
            }
            else{return false}
        }
    
    }
    isEmpty() {
        // return true if SLStack is empty
        // return false if SLStack is not empty
        if (this.head == null){
            return true
        }
        else{
            return false
        }
    }
    size() {
        // return length of SLStack
        var count =0;
        if (this.head != null){
            var runner = this.head
            while(runner.next != null){
                count ++
                runner = runner.next
            }
            count ++
        }
    }
    print() {
        // print out the values of the SLStack
        if (this.head != null){
            var runner = this.head
            while(runner.next != null){
                console.log(runner.value)
                runner = runner.next
            }
            console.log(runner.value)
        }
}
}
class SLQueue {
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
    var newnode= new SLNode(val);
    if(this.isEmpty())
    {
        this.head=newnode;
    }
    else
    {
         this.tail.next=newnode;
    }
    this.tail=newnode;
    this.size++;

    }
  
    // Time: O(1) constant
    // Space: O(1)
    dequeue() {
      // REMOVE NODE FROM THE FRONT
      // AND RETURN VALUE
      // DECREMENT SIZE
      var popvalue=this.head.value;
      this.head=this.head.next;
      this.size--;
      return popvalue;
  
    }
  
    // Time: O(1) constant
    // Space: O(1)
    front() {
      // RETURN THE VALUE OF THE HEAD
      return this.head.value;
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
        vals += `${runner.value}${runner.next ? ", " : ""}`;
        runner = runner.next;
      }
      console.log(vals);
      return vals;
    }
    isPalindrome(){
    
    var palinstack=new Stack();
    
    //Do we HAVE to dequeue from the queue to solve this problem or can we just not dequeue to preserve order?
    // you don't HAVE to, but that's the restriction for the Algo
    }
}
/* 
    Queue: Is Palindrome
    Output: Bool representing if the queue items are a palindrome (items same forwards as reversed)
    
    Restore Queue to original state before returning.
    For storage, use one additional Stack only.
    You CAN use vars to store a dequeued and/or popped item, 
    but NO string concatenating the entire queue, no 2nd stack, 2nd queue, or arrays.
    
  */

  /* 
    Approach:
    1. loop over fixed-length of queue
      - dequeue each item and push it into the stack
      - enqueue each item back into the queue to preserve it's order
    2. loop over fixed-length of queue and check equality of popped & dequeued vals
      - enqueue each dequeued item back into the queue to preserve it's order
    Time: O(2n) -> O(n) linear, n = queue length
    Space: O(n) from the stack being used
  */

 

// Time: O(n) linear since enqueue is O(1), n = vals.length
// Space: O(1)
