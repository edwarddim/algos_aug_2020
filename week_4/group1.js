// TUE
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
        this.shiftUp();
    }

    shiftUp(i= [this.heap.length-1]){
        if (this.heap[i]< this.heap[Math.floor(i/2)]){
            var temp= this.heap[i];
            this.heap[i]=this.heap[Math.floor(i/2)];
            this.heap[Math.floor(i/2)] = temp;
            this.shiftUp(Math.floor(i/2))
        }
        return 

    }
}

var mHeap = new MinHeap()
mHeap.insert(2)
mHeap.insert(3)
mHeap.insert(1)
console.log(mHeap.heap)