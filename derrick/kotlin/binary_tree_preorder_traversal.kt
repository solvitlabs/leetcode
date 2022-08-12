/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 *  
 * class TreeNode (var `val`: Int) {
 *    var left: TreeNode? = null
 *    var right: TreeNode? = null
 * }
 */
 

 
 class Solution {
    fun preorderTraversal(root: TreeNode?): ArrayList<Int> {
        var result = ArrayList<Int>()
        
        fun traverse(node: TreeNode?) {
            if (node?.`val` != null) result.add(node.`val`)
            if (node?.left != null) traverse(node.left)
            if (node?.right != null) traverse(node.right)            
        }
        
        traverse(root)
        
        return result
    }
}