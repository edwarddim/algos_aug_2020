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

    heapify(arr, length, i){
        // 1. CHECK TO SEE IF CHILDREN NODE OF i IS SMALLER
        // AND SWAP WITH SMALLER CHILD
        // 2. RECURSIVELY CALL ON THE SMALLER CHILD
        // 3. RETURN IF NO NODES WERE SWAPPED
        var leftChild = i *2;
        var rightChild = (i * 2) + 1;
        if(arr[leftChild] > arr[rightChild]){
            var temp = arr[leftChild]
        }
        else{
            var temp = arr[rightChild];
        }
    
    }
    
    heapSort(arr){
        // HEAPIFIES THE ARR
        // 1. FIND THE MIDDLE POINT OF OUR DATA
        // 2. HEAPIFY FROM THAT DATAPOINT TO INDEX 1
    
        // 2. SORT THE ARRAY W/ HEAPIFTY
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





heapify(arr, length, i=1){
    var smallInd = i
    var leftInd = i * 2
    var rightInd = (i * 2) + 1
    // 1. CHECK TO SEE IF CHILDREN NODE OF i IS SMALLER
    // AND SWAP WITH SMALLER CHILD
    if(rightInd<length){
        var swapInd=i;
        if( arr[leftInd] < arr[rightInd] ){
            if(arr[leftInd]<arr[smallInd]){
                swapInd=leftInd;
                this.heapify(arr, length, leftInd);
            }
        }
        else{
            if(arr[rightInd]<arr[smallInd]){
                swapInd=rightInd;
                this.heapify(arr, length, rightInd);
            }
        }

    }
    if(leftInd==length-1){
        if(arr[leftInd]<arr[smallInd]){
            swapInd=leftInd;
            this.heapify(arr, length, leftInd);
        }
    }
    var temp=arr[swapInd];
    arr[swapInd]=arr[i];
    arr[i]=temp;
    return;

    // 2. RECURSIVELY CALL ON THE SMALLER CHILD
    

    // 3. RETURN IF NO NODES WERE SWAPPED
}

heapSort(arr){
    // HEAPIFIES THE ARR
    // 1. FIND THE MIDDLE POINT OF OUR DATA
    var startPoint = Math.floor(arr.length/2)
    // 2. HEAPIFY FROM THAT DATAPOINT TO INDEX 1
    var stop=arr.length;
    while(startPoint >= 1){
        this.heapify(arr, stop, startPoint)
        startPoint-=1;
    }

// ----------------------------------------------- //
    // SORT THE ARRAY W/ HEAPIFTY
    // 1. SWAP THE MIN(ROOT) WITH THE LAST NUM IN FIRST HALF ARRAY
    // 2. THEN HEAPIFY THE THE FIRST HALF OF THE ARRAY
    while(stop>=2){
        var temp = arr[1];
        stop--;
        arr[1] = arr[stop];
        arr[stop] = temp;
        this.heapify(arr,stop)

    }
    
    
}   
}