fun main() {
    val tree = BinarySearchTree()
    tree.insert(10)
    tree.insert(11)
    tree.insert(12)
    tree.insert(6)
    tree.insert(3)
    tree.insert(4)
    println(tree.toString())
    println(tree.find(7))
    println(tree.BFS())
}

class Node(var value: Int, var left: Node? = null, var right: Node? = null)

class BinarySearchTree(private var root: Node? = null) {
	fun insert(value: Int) :BinarySearchTree{
        if (root == null) {
           root = Node(value)
        } else {
            var current = root
            while(true) {
                if (value < current?.value!!) {
                    if (current.left?.value == null) {
                        current.left = Node(value)
                         break
                    }
                    current = current.left
                   
                } else if (value > current.value) {
                    if (current.right?.value == null) {
                        current.right = Node(value)
                        break
                    }
                    current = current.right
                }
            }
        }
        
        return this
        	
    }
    
    fun find(value: Int) :Boolean{
        var isFound = false
        if (root?.value == value) {
            isFound = true
        } else if (root != null) {
            var current = root
            while (true) {
                if (current?.value == null) {
                    break
                } else if (current.value > value) {
                	current = current.left
            	} else if (current.value < value) {
                    current = current.right
                } else {
                    isFound = true
                    break
                }
            }

        }
        
        return isFound
    }

    fun BFS() :List<Int?>{
        val `data` = ArrayList<Int?>()
        val queue = ArrayList<Node?>()

        queue.add(root)
        var node: Node?
        while(!queue.isEmpty()) {
            node = queue.removeAt(0)
            `data`.add(node?.value)
            
            if (node?.left != null) queue.add(node.left)
            if (node?.right != null) queue.add(node.right)            
        }
        
        return `data`
        
    }
    
    
}