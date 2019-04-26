export default class Stack {
    constructor(size=100) {
        this.stack = new Array(size);
        this.top = -1;
    }
  push(element) {
      stack.push(element)
      this.top++;
  }

  pop() {
      stack.pop();
      this.top--;
  }
  peek() {
      return stack[top]; 
  }
  isEmpty() {
      if(this.top===-1)
      return true;
      return false;
  }
  size() {
      return top;
  }
}