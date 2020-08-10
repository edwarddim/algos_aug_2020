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