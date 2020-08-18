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

height(){
    let dict={};
    runner=this.root;
    while(runner!=null){
        for(let i=this.min();i<this.this.max();)
        let count=1;
        
    }
    
}



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