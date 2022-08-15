/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
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
    fun inorderTraversal(root: TreeNode?): ArrayList<Int> {
        var result = ArrayList<Int>()
        if (root?.`val` != null) {
            var current = root
            fun traversal(tree: TreeNode) {
                if (tree?.left != null) traversal(tree?.left)
                result.add(tree?.`val`)
                if (tree?.right != null) traversal(tree?.right)
            }   
            traversal(root)
        }
        
        return result
    }
}