fun main() {
    val tree = BinarySearchTree()
    tree.insert(10)
    tree.insert(11)
    tree.insert(12)
    tree.insert(6)
    tree.insert(3)
    println(tree.find(7))
}

class Node(var value: Int, var left: Node? = null, var right: Node? = null)

class BinarySearchTree(private var root: Node? = null) {
	fun insert(value: Int) :BinarySearchTree{
        if (root == null) {
           root = Node(value)
        } else {
            var current = root
            while(true) {
                if (current?.value!! < value) {
                    if (current.left?.value == null) {
                        current.left = Node(value)
                         break
                    }
                    current = current.left
                   
                } else if (current.value > value) {
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
                } else if (current.value < value) {
                	current = current.left
            	} else if (current.value > value) {
                    current = current.right
                } else {
                    isFound = true
                    break
                }
            }

        }
        
        return isFound
    }
    
    
}