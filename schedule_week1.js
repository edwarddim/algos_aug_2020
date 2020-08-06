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
  }

}

// MON



// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE

// insertAtFront(value)
// removeAtFront()
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED

// contains(value)
// pop()
// remove(value)
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR

// partition(num)
// PARTITION A LINKED LIST AROUND A VALUE X, SUCH THAT ALL NODE LESS THAN X
// COME BEFORE ALL NODES GREATER THAN OR EQUAL TO X
// partition(5)
// INPUT: 3->5->8->5->10->2->1
// OUTPUT: 3->1->2 -> 10->5->5->8
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// FRI

// concat(list)
// moveMinToFront()
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//