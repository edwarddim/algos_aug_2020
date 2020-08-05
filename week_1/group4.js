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