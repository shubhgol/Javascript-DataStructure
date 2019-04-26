const Stack = require('./Stack.js')

const stack = new Stack(50);

stack.push('A');
stack.push('B');
stack.push('C');

console.log(stack.peek());
