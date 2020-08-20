

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