// 有一个接口请求依赖的服务可能要 15 秒以上才有返回，但是 UI 层面的用户不能忍受长时间的等待
// 需要做一种立即返回的 response，但是服务成功与否需要通过另外的途径通知
var request = require('request');


function testAsyncErrorHandler() {
    new Promise(function (resolve, reject) {
        secondPromise().then(function (value) {
            // handle value and found some error
            throw new Error(`${value} and throw error`);
            console.log('after throw in second error') // will not run 
        }).catch(function (err) {
            console.log('caught in second promise catch');
            console.log(err);
            // throw err; // it will never be caught or handled as rejection
            reject(err);
        })
    }).catch(function (err) {
        console.log(typeof err);
        console.log(err);
    })
    console.log('after catch');
}

function secondPromise() {
    return new Promise(function (resolve, reject) {
        resolve('resolve in second promise');
    })
}


try {
    testAsyncErrorHandler();
} catch (err) {
    console.log('in catch with sync type');
    console.log(typeof err);
    console.log(err);
}

process.on('uncaughtException', (err) => {
    console.log(`Caught uncaughtException: ${err}\n`);
});

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});