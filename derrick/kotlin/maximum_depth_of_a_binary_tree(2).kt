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

    fun maxDepth(root: TreeNode?) :Int{
        if(root == null)
            return 0;

        var maximumDepth = 1
        var stack = ArrayList<Pair<TreeNode?,Int>>()
        stack.add(Pair(root, 1))
        
        while (stack.size > 0) {
            val (node, curDepth) = stack.removeAt(stack.size - 1)
            
            maximumDepth = Math.max(maximumDepth, curDepth)
            if (node?.left != null) stack.add(Pair(node.left, curDepth + 1))
            if (node?.right != null) stack.add(Pair(node.right, curDepth + 1))            
        }
        
      
        
        return maximumDepth
    }

}