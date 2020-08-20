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
        var runner=this.root;
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
    /* 
        TAKES IN A SORTED ARR AND CREATES A BST WITH NUMBERS
        FROM ARRAY
        [1,2,3,4,5,6,7]
    */
    sortedArrtoBST(arr){
        var index=Math.floor(arr.length/2)
        this.insert(arr[index]);
        if(arr.length==1)
            return;
        
        this.sortedArrtoBST(arr.slice(0,index));
        this.sortedArrtoBST(arr.slice(index++));
    }

    /* 
        RETURNS THE HEIGHT OF THE BST
    */


//
    height(runner=this.root,count=0){
        if(runner==null)return count;
        count++;
        var leftlink=this.height(runner.left,count)
        var rightlink=this.height(runner.right,count)
        if(leftlink>rightlink)return leftlink;
        else return rightlink;
    }

    isBalanced(runner=this.head){
        //IF TREE IS EMPTY RETURN TRUE
        if(runner==null)return true;
        //GET THE HEIGHT OF BOTH SIDES OF THE CURRENT NODE
        var lHeight=this.height(runner.left);
        var rHeight=this.height(runner.right);
        //BIG BOY IF CHECK
        if(
            //IS THE DIFFERENCE IN HEIGHT BETWEEN THE SIDES OF THE NODE LESS THAN 2?
            Math.abs(lHeight-rHeight)<2&&
            //IS THE LEFT SIDE BALANCED?
            this.isBalanced(runner.left)&&
            //IS THE RIGHT SIDE BALANCED?
            this.isBalanced(runner.right)
            //IF ALL THAT IS TRUE, THEN TREE IS BALANCED
            )return true;
        //IF WE GET HERE, IT WASNT BALANCED...DARN
        return false;
    }

    // delete(value){
    //     if(!this.contains(value))return "value is not in BST";

    // }

    inOrder(runner=this.root){
        if(runner !=null){
            this.inOrder(runner.left);
            console.log(runner.value);
            this.inOrder(runner.right);
        }
    }

};


 
var bst=new BST();
bst.sortedArrtoBST([1,2,3,4,5])
console.log(bst.height())
