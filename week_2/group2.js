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
        if (this.head == null){
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
            var tempHead = this.head.value;
            this.head = this.head.next;
                
        }
            return tempHead;
        }
    }
    
    peek() {
        // return data at top of stack without removing
        if (this.head != null){
            return this.head.value;
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
        var palinstack=new SLStack();
        var dequeuevalue;
        var bool=true;
        for(var x=0;x<this.size;x++){
            dequeuevalue=this.dequeue();
            palinstack.push(dequeuevalue);
            this.enqueue(dequeuevalue);
        }
        for(x=0;x<this.size;x++){
            dequeuevalue=this.dequeue();
            if(dequeuevalue != palinstack.pop()){
                bool=false;
            }
            this.enqueue(dequeuevalue);
        }
        return bool;
    //Do we HAVE to dequeue from the queue to solve this problem or can we just not dequeue to preserve order?
    // you don't HAVE to, but that's the restriction for the Algo
    }
}

 

// Time: O(n) linear since enqueue is O(1), n = vals.length
// Space: O(1)
var list=new SLQueue();
list.enqueue("A")
list.enqueue("B")
list.enqueue("C")
list.enqueue("B")
list.enqueue("A")
console.log(list.isPalindrome());


// -------------------------------------------//
class CircleQueue{
    constructor(length){
        this.size = length
        this.head = -1
        this.tail = -1
        this.items = new Array(length)
    }
    displayValues(){
        console.log(this.items)
    }
    enqueue(value){
        // CHECK IF THE QUEUE IS FULL
        if((this.tail+1)%this.size==this.head){
            console.log("Queue is full")
            return false
        }
        //INCREMENT TAIL
        this.tail=(this.tail+1)%this.size;
        //ADD VALUE TO QUEUE WITH NEW TAIL POSITION
        this.items[this.tail]=value
        //CHECK IF THE QUEUE WAS EMPTY
        if(this.head==-1){this.head=0}
    }
    dequeue(){
        // if(this.head==this.size-1){this.head=0}
        // else{this.head++}
  
    }

}

var circleQ = new CircleQueue(10)
circleQ.displayValues()
circleQ.enqueue('a')
circleQ.enqueue('b')
circleQ,dequeue()
circleQ.enqueue('c')

