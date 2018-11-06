var EventEmitter = require('events');

class MyEmitter extends EventEmitter {  };

const myEmitter = new MyEmitter();

myEmitter.on(
    'event',
    (a, b) => {
        console.log(a, b, this, this === myEmitter);
        // Print: a, b {} false 
        // 箭头函数不会将 this 指向myEmitter实例
    }
);

myEmitter.emit('event', 'a', 'b');