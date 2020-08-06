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
    var newNode=new SLNode(value);
    newNode.next=this.head;
    this.head=newNode;

  };
  removeAtFront(){
    var delNode=this.head;
    this.head=delNode.next;
    delNode.next=null;
  };
  seedFromArr(arr){
    var lastNode= this.head;
    while(lastNode.next!=null){
      lastNode=lastNode.next;
    }
    for(let i=0;i<arr.length;i++){
      var newNode=new SLNode(arr[i]);
      lastNode.next=newNode;
      lastNode=newNode;
    }
  }
  remove(value){
    // THIS ALGO WORKS IF THE VALUE WE ARE LOOKING FOR IS IN THE MIDDLE OF LIST
    // IF IT'S THE FIRST OR THE LAST IT WOULD NOT WORK
    var runner = this.head;

    while(runner.next.value != value){
      runner = runner.next
    }
    if(){
      this.removeAtFront()
    }
    if(runner.next = null){
      this.pop()
    }
    else{
    var runner2 = runner.next;
    runner.next = runner2.next;
    }

  }
  pop(){
    var runner = this.head;
    while(runner.next.next != null){
      runner = runner.next
    }
    runner.next = null;
  }
  // CREATING A NEW LIST
  partitionNew(num){
    var list = new SLL()
    runner = this.head
    while(runner.next != null){
      if(runner.value < num){
        list.insertAtFront(runner.value)
      }
      if(runner.value >= num){
        list.push(runner.value)
      }
      runner = runner.next
    }
    // ONE LAST IF CHECK FOR THE LAST NODE
    this.head = list.head
  }
  // REARRANGING A LIST
  partition(num){
    var runner = this.head
    while(runner.next != null){
      if(runner.value < num){
        
      }
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
list.removeAtFront()
list.printAllValues()

var arr = [7,8,9]
list.seedFromArr(arr)
list.printAllValues();