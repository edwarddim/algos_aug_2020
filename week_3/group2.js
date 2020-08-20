// BINARY SEARCH TREE

class BSTNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null;
    }


// MON

/* 
    CHECK TO SEE IF BST IS EMPTY
*/
isEmpty(){
    if(this.root==null)
        return true;
    return false;

}
/* 
    RETURN THE MINIMUM VALUE STORED IN THE BST
*/
min(){
    var runner=this.root;
    while(runner.left!=null)
    {
        runner=runner.left;
    }
    return runner.value;

}
/* 
    1. BASE CASE
    2. FORWARD PROGRESS
    3. RECURISVE CALL
*/
//recursive min
rMin(runner=this.root){
    if(runner.left==null){
        return runner.value;
    }
    return this.rMin(runner.left);
}
/* 
    RETURN THE MAXIMUM VALUE STORED IN THE BST
*/
max(){
    let runner=this.root;
    while(runner.right!=null){
        runner=runner.right;
    }
    return runner.value;
}

//recursive max
rMax(runner=this.root){
    if(runner.right==null){
        return runner.value;
    }
    return this.rMax(runner.right);
}

insert(value){
    runner=this.root;
    let newNode= new BSTNode(value);
    while(runner!=null){
        if(runner.value>value){
            if(runner.left==null){
                runner.left=newNode;
                return;
            }
            else runner=runner.left;
        }
        else {
            if(runner.right==null){
                runner.right=newNode;
                return;
            }
            else runner=runner.right;
        }
    }
}

rInsert(value, runner=this.root){
    if(runner.value>value&&runner.left==null){
        runner.left=new BSTNode(value);
        return;
    }
    else if(runner.value<value&&runner.right==null){
        runner.right=new BSTNode(value);
        return;
    }
    if(runner.value>value)return this.rInsert(value, runner=runner.left);
    else return this.rInsert(value, runner=runner.right);
}

contains(value){
    runner=this.root;
    while(runner!=null){
        if(runner.value==value)return true;
        else if(runner.value>value)runner=runner.left;
        else runner=runner.right;
    }
    return false;
}

rContains(value, runner=this.root){
    if(runner.value==value)return true;
    else if(runner==null)return false;
    if(runner.value>value) return this.rContains(value, runner=runner.left)
    else return this.rContains(value, runner=runner.right)
}

range(){
    return this.max()-this.min();
}

rRange(){
    return this.rMax()-this.rMin();
}



/* 
    TAKES IN A SORTED ARR AND CREATES A BST WITH NUMBERS
    FROM ARRAY
*/

sortedArrToBSTWrapper(arr){
    this.root = this.sortedArrtoBST(arr)
}

sortedArrtoBST(arr){
    if (arr.length == 0){
        return null; 
    }
    var mid = Math.floor(arr.length/2)
    var midVal = arr[mid]
    var sliceR = arr.slice(mid+1, arr.length)
    var sliceL = arr.slice(0, mid)
    var newNode = new BSTNode(midVal)
    newNode.right = this.sortedArrtoBST(sliceR)
    newNode.left = this.sortedArrtoBST(sliceL)
    return newNode //WOOOOT
}

/* 
    RETURNS THE HEIGHT OF THE BST
*/
height(runner=this.root,count=0){
    if(runner==null)return count;
    count++;
    var leftlink=this.height(runner.left,count)
    var rightlink=this.height(runner.right,count)
    if(leftlink>rightlink)return leftlink;
    else return rightlink;
}

 isBalanced(runner=this.root){
     if(runner==null){
         
         return true;
     }
    // now that you have the lBalance, rBalance, and the height difference
    // you want to evaluate all three to them together
     var lbalanced=this.isBalanced(runner.left);
     var rbalanced=this.isBalanced(runner.right);

     

     if(lbalanced==false ||rbalanced==false)
        return false;
     else{
        var leftheight=this.height(runner.left);
        var rightheight=this.height(runner.right);
        if(Math.abs(leftheight-rightheight)>1)
            {return false;}
        else
            {return true;}
     }

     if(Math.abs(leftheight-rightheight) <= 1 && lbalanced && rbalanced ){
         return true
     }
     return false
 }


}