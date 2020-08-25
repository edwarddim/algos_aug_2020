// TUE
// MIN HEAP
/*
    PARENT LOCAITON = Math.floor(i / 2)
    LEFT CHILD = i * 2
    RIGHT CHILD = (i * 2) + 1
*/
/*
    Inserting a new value in to the heap requires you to push
    the value to the back of the array and then shiftUp, the value
    to the correct index

*/
class MinHeap{
    constructor(){
        this.heap = [];
    }


insert(value){
    this.heap.push(value)
    this.shiftUp()

}
// has to swap values
shiftUp(){
    var indexVal = this.heap.length-1 
    var parentVal = Math.floor(indexVal/2)
    while(this.heap[indexVal]<this.heap[parentVal]){ 
        var temp = this.heap[parentVal]
        this.heap[parentVal] = this.heap[indexVal] 
        this.heap[indexVal] = temp // you aren't going to push values to the heap anymore
    }
}

