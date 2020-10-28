export default class Stack {
    //`声明属性 java c# -> js
    // items 按照一定的方法去操作

    private items: any[]; //存储结构
    constructor() {
        this.items = [];
    }
    push(item:any) {
        this.items.push(item)
    }
    pop(): any{
        return this.items.pop();
    }

    //返回栈顶元素
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0
    }
    clear() {
        this.items = []
    }
    size(): number {
        return this.items.length
    }
    toString() {
        //原型链上继承了object的toString()方法
        return this.items.toString()
    }
}