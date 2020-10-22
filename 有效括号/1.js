/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    function Stack() {
        this.size = size
        this.pop = pop 
        this.data = []
        this.top = 0
        this.push = push 
        this.peek = peek
    }
    function push(element) {
       this.data[this.top++] = element
    }
    function pop() {
        return this.data[--this.top]
    }
    function peek() {
        if(this.top < 0)
            return 'null'
        else
            return this.data[this.top-1]
    }

    function size() {
        return this.top;
    }
    var stack = new Stack(),
        i;
    for(i = 0;i < s.length;i++) {
        if(s[i] == '(' || s[i] == '[' || s[i] == '{')
            stack.push(s[i]);
        else{
            if(stack.size() == 0)
                return false;
            var c = stack.peek();
            stack.pop();
            var flag;
            if (s[i] == ')') {
                flag = '('               
            }
            else if(s[i] == '}') {
                flag = '{'
            }
            else{
                flag = '['
            }
            if(c != flag)
                return false;
        }
    }
    if(stack.size() != 0)
        return false;
    else
        return true;

 };s