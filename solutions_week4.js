shiftUp(){
    var index = this.heaps.length - 1;
    while(index > 1){
        var parentInd = Math.floor(index / 2)
        if( this.heap[parentInd] < this.heap[index] ){
            break
        }
        var temp = this.heap[index]
        this.heap[index] = this.heap[parentInd]
        this.heap[parentInd] = temp

        index = parentInd
    }
}