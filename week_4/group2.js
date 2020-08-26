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
// [ null,  ]
class MinHeap{
    constructor(){
        this.heap = [null];
    }


    insert(value){
        this.heap.push(value)
        this.shiftUp()

    }
    // has to swap values
    shiftUp(){
        var indexVal = this.heap.length-1 
        var parentVal = Math.floor(indexVal/2)
        while(this.heap[indexVal] < this.heap[parentVal]){ 
            var temp = this.heap[parentVal]
            this.heap[parentVal] = this.heap[indexVal] 
            this.heap[indexVal] = temp 
            // recursive? parent now needs to be checked with its parent
        }
        // we can do this iteratively, doesn't need to be recrusive
    }
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
          return;
        }
    
        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
    
        console.log(
          " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );
    
        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
    printArr(...appendedMsgs) {
        const arrStr = `\n[${["null", ...this.heap.slice(1)].join(", ")}]`;
        const msgLen = arrStr.length + appendedMsgs.toString().length;
        console.log("-".repeat(msgLen), arrStr, ...appendedMsgs);
    }

}