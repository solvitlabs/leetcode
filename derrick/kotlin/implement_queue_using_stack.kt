class MyQueue() {
    // 1 2 3 4 5
    // declare a stack as an ArrayList<Int>
    private var stack1 = ArrayList<Int>()

    fun push(x: Int) {
        stack1.add(x)
    }

    fun pop(): Int {
        // TODO: Amortize to O(1)        
        val element = peek()
        stack1.remove(element)
        return element
    }

    fun peek(): Int {
        return stack1.get(0)
    }

    fun empty(): Boolean {
        return stack1.size === 0
    }

}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */