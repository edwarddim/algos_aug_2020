class SLNode{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class SLL{
  constructor(){
    this.head = null
  }
  printAllValues(){
    if(this.head ===  null){
      console.log('LIST IS EMPTY')
    }
    var runner = this.head
    while(runner.next != null){
        console.log(runner.value)
        runner = runner.next
    }
    console.log(runner.value)
  }

  isEmpty(){
    if(this.head === null){
      return true
    }
    else{
      return false
    }
  }

  push(value){
    // 1. CREATING A NEW NODE WHEN THE LIST IS EMPTY
    var newNode = new SLNode(value)
    if(this.head === null){
      this.head = newNode
      return
    }
    // 2. CREATING A NEW NODE WHEN THE LIST IS NOT EMPTY
    var runner = this.head
    while(runner.next != null){
      runner = runner.next
    }
    runner.next = newNode
  };

  insertAtFront(value){
    var newNode = new SLNode(value)
    newNode.next = this.head
    this.head = newNode
    
    
  };
  removeAtFront(){
    var tempVar = this.head
    this.head = this.head.next
    tempVar = null
  };

  pop(){
    var runner = this.head
    while(runner.next.next != null){
      runner = runner.next
    }
    runner.next=null;
  }

  contains(val){
    var runner=this.head;
    while(runner.next !=null){
      if(runner.value==val){return true}
      runner=runner.next
    }
    if(runner.value==val){return true}
    return false
  }

  remove(val){
    var runner=this.head;
    var before;
    if(runner.value==val){this.head=runner.next}
    else{
      while(runner.next !=null){
        if(runner.value==val){before.next=runner.next;}
        before = runner;
        runner=runner.next
      }
      if(runner.value==val){before.next=null}
    }
  }
};



var list = new SLL();
list.push(1)
list.push(2)
list.push(3)
list.push(4)

list.insertAtFront(6)
list.printAllValues()
console.log("-----------------------------------")

var list = new SLL();
list.push(1)
list.push(2)
list.push(3)
list.push(4)

list.insertAtFront(6)
list.printAllValues()
console.log("-----------------------------------")
list.removeAtFront()
list.printAllValues()
console.log("-----------------------------------")
list.pop();
list.printAllValues();

console.log("-----------------------------------")
console.log(list.contains(3))//should return true
console.log(list.contains(4))//should return false
console.log("-----------------------------------")
list.remove(2);
list.printAllValues();//should log 1,3