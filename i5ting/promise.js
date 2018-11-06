var promise = new Promise(function (resolve, reject) {
    // do a thing, possibly async, then ...
    /* everything truned out fine */
    if (true) {
        resolve('Stuff worked!');
    } else {
        reject(Error('It broke'));
    }
});

promise.then(function(text) {
    console.log(text); // Stuff worked!
    return Promise.reject(new Error('我是故意的'));
}).catch(function(err) {
    console.log(err);
});

// reject 是拒接， 跳转到catch error
// resolve 是解决，下一步，既是跳转到下一个Promise操作