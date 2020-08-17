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
        return (this.root == null) 
    }
    /* 
        RETURN THE MINIMUM VALUE STORED IN THE BST
    */
    min(){
        var runner = this.root;
        while (runner.left != null){
            runner = runner.left
        }
        return runner.value
    }

    /* 
        RETURN THE MAXIMUM VALUE STORED IN THE BST
    */
    max(){
        var runner = this.root;
        while (runner.right != null){
            runner = runner.right
        }
        return runner.value
    }
}