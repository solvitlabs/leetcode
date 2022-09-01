/**
 * link: leetcode.com/problems/binary-tree-level-order-traversal
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
    fun levelOrder(root: TreeNode?): List<List<Int>> {
        val result = ArrayList<ArrayList<Int>>() 
        val queue = ArrayList<TreeNode>()
        
        if (root != null) queue.add(root)
        
        while (queue.size > 0) {
            val tmp = ArrayList<Int>()
            var queueLength = queue.size
            for (i in 0 until queueLength) {
                val node = queue.removeAt(0)     
                if (node?.`val` != null) tmp.add(node?.`val`)                        
                if (node?.left != null) queue.add(node?.left)
                if (node?.right != null) queue.add(node?.right)
            }
            
            result.add(tmp)

        }
        
        return result               

     }
}