/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun postorderTraversal(root: TreeNode?): List<Int> {
        var result = ArrayList<Int>()
        
        if (root?.`val` != null) {
            fun traversal(tree: TreeNode) {
                if (tree?.left != null) traversal(tree.left)
                if (tree?.right != null) traversal(tree.right)
                result.add(tree.`val`)
            }
            
            traversal(root)
        }
        
        return result
    }
}