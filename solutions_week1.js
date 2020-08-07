partition(num){
    var leftPartitionHead = null
    var leftRunner = null
    var rightPartitionHead = null
    var rightRunner = null
    if(this.head == null) return false
    var runner = this.head
    while(runner.next != null){
        if(runner.value < num){
            if(leftPartitionHead == null){
                leftPartitionHead = runner
                leftRunner = leftPartitionHead
            }
            else{
                leftRunner.next = runner
                leftRunner = leftRunner.next
            }
        }
        else{
            if(rightPartitionHead == null){
                rightPartitionHead = runner
                rightRunner = rightPartitionHead
            }
            else{
                rightRunner.next = runner
                rightRunner = rightRunner.next
            }
        }
        runner = runner.next
    }
    if(runner.value < num){
        leftRunner.next = runner
        leftRunner = leftRunner.next
    }
    else{
        rightRunner.next = runner
        rightRunner = rightRunner.next
    }
    rightRunner.next = null
    this.head = leftPartitionHead
    leftRunner.next = rightPartitionHead
}


reverseList(){
    var prevRunner = null
    var nextRunner = null
    var currentRunner = this.head
    while(currentRunner !=null){
        nextRunner = currentRunner.next
        currentRunner.next = prevRunner
        prevRunner = currentRunner
        currentRunner = nextRunner
    }
    this.head = prevRunner
}