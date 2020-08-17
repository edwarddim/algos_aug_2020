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

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
// contains()
// range()

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
// insert(value)


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR
// height()

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// FRI
// isBalanced()

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
}