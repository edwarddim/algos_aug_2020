

recHeight(node=this.root){
    
    if(node == null) return 0
    else{
        var leftHeight = this.recHeight(node.left)
        var rightHeight = this.recHeight(node.right)
        if(leftHeight > rightHeight) return leftHeight + 1
        else return rightHeight + 1
    }
};

var bst = new BST()
bst.recHeight()

sortedArrtoBST(arr){
    console.log(arr)
    if(arr.length < 1){
        return null
    }
    var mid = Math.floor(arr.length/2)
    var root = new BSTNode(arr[mid])
    root.left = this.sortedArrtoBST(arr.slice(0,mid))
    root.right = this.sortedArrtoBST(arr.slice(mid+1, arr.length))
    return root
};

delete(node, value){
    if(node == null) return null
    else if(value < node.value) node.left = this.delete(node.left, value)
    else if(value > node.value) node.right = this.delete(node.right, value)
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
            node.right = this.delete(node.right, temp.value)
        }
    }
    return node
};