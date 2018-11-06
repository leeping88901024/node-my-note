const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on(
    'event',
    function (a, b) {
        console.log(`触发事件 ${a} ${b} ${this === myEmitter}`);
    }
);

myEmitter.emit('event', 'hahah', 'xixixi');