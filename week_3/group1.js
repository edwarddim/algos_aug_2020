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
    
    range(){
        var max=this.max();
        var min=this.min();
        return(max-min);
        
    }
    /* 
        CREATE A NODE IN THE BST AT THE RIGHT PLACE
    */
    insert(value){
        var newnode=new BSTNode(value);
        runner=this.root;
        if(this.isEmpty())
        {
            this.root=newnode;
            return;
        }
        
        while(runner !=null)
        {
            if(value>=runner.value){
                if(runner.right==null){
                    runner.right=newnode;
                    return;
                }
                runner=runner.right;
            }
            else{
                if(runner.left==null){
                    runner.left=newnode;
                    return;
                }
                runner=runner.left;
            }   
        }    
    }

    recinsert(runner=this.root,value)
    {
        if(runner==null){
            var newnode=new BSTNode(value);
            runner=newnode;
            return;
        }
        if(value>=runner.value){
            this.recinsert(runner.right,value);
        }
        else{
            this.recinsert(runner.left,value);
        }
    }
    /* 
        RETURNS TRUE IF THE VALUE EXISTS WITHIN THE BST
    */
    reccontains(runner=this.root,value){
        if(runner.value==null)
            return false;
        if(runner.value==value)
            return true;
        if(value>runner.value)
            return reccontains(runner.right,value);
        else{
            return reccontains(runner.left,value)
        }
    }

    contains(value){
        var runner=this.root;
        while(runner!=null)
        {
            if(value>runner.value)
                runner=runner.right;
            else if (value<runner.value)
                runner=runner.left;
            else
                return true;
        }
        return false
    
    }
}