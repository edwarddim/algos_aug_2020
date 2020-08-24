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
    isEmpty(){
        return (this.root == null) 
    }
    min(){
        var runner = this.root;
        while (runner.left != null){
            runner = runner.left
        }
        return runner.value
    }
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
        return newNode
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
    inOrder(runner=this.root){
        if(runner !=null){
            this.inOrder(runner.left);
            console.log(runner.value);
            this.inOrder(runner.right);
        }
    }
    delete(value, node=this.root){
        if(node == null) return null
        else if(value < node.value) node.left = this.delete(value, node.left)
        else if(value > node.value) node.right = this.delete(value, node.right)
        else{
            // CASE 1: Deleting with ONE child or NO child
            if(node.left == null){
                var temp = node.right
                node = null
                console.log("Deletion from node.left==null")
                return temp
            }
            else if(node.right == null){
                var temp = node.left
                node = null
                console.log("Deletion node.right==null")
                return temp
            }
            // CASE 2: Deleting with two child (finding MIN of RIGHT SUBTREE)
            else{
                console.log('TWO CHILD DELETE')
                var temp = this.findMin(node.right)
                node.value = temp.value
                node.right = this.delete(temp.value, node.right)
            }
        }
        return node
    };
}