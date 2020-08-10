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
        

        var newnode= new SLNode(newVal);
            newnode.next=this.head;
            this.head=newnode;
    }
    pop() {
        // remove and return data at top of stack
        this.head=this.head.next;
    }
    peek() {
        // return data at top of stack without removing
        return this.head.value;
    }
    contains(value) {
        // return true if SLStack contains value
        // return false if SLStack does not contain value
        var runner=this.head;
        while(runner!=null){
            if(runner.value==value){return true;}
            runner=runner.next;
        }
        return false;
    }
    isEmpty() {
        // return true if SLStack is empty
        // return false if SLStack is not empty
        if(this.head==null)
            return true;
        else
            return false;
    }
    size() {
        // return length of SLStack
        var runner=this.head;
        var count=0;
        if (this.head==null){return count;}
        while(runner!=null){
            runner=runner.next;
            count++;
        }
        return count;

    }
    print() {
        // print out the values of the SLStack
        var runner=this.head;
        while(runner!=null){
           console.log(runner.value);
            runner=runner.next;
        }
    }
}

var list=new SLStack();
console.log("---------isEmpty Check-----------")
console.log(list.isEmpty());
console.log("-----------push check------------")
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.print();
console.log("----------isEmpty Check----------")
console.log(list.isEmpty());
console.log("------------pop check------------")
list.pop();
list.print();
console.log("-----------peek check------------")
console.log(list.peek());
console.log("---------contains check----------")
console.log(list.contains(1))
console.log("-----------size check------------")
console.log(list.size());
console.log("----------final ressult----------")
list.print();
console.log("---------------------------------")
