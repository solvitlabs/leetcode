class Solution {
    fun isValid(s: String): Boolean {
        if (s.length % 2 !== 0) return false

        var validBrackets = HashMap<String, Boolean>()
        validBrackets["()"] = true
        validBrackets["[]"] = true
        validBrackets["{}"] = true
        var stack = ArrayList<String>()
        lateinit var bracket: String
        lateinit var fullBracket: String
        var lastIndex: Int? = null
        // 1.iterate the input
        for(ch in s) {
            bracket = ch.toString()
            // 2.store opening brackets in a stack
            if (bracket == "("||bracket == "{"||bracket == "[") {
                stack.add(bracket)
            } else {
                // 3.pop the stack if matching closing bracket is found
                lastIndex = stack.size - 1
                if (stack.size == 0) return false
                
                fullBracket = "${stack.get(lastIndex)}$bracket"
                if (validBrackets.containsKey(fullBracket)) {
                    stack.removeAt(lastIndex)                    
                } else {
                    return false
                }
                
            }
            
        }
        
        return stack.isEmpty()
    }
}