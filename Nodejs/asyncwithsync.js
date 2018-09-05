// 有一个接口请求依赖的服务可能要 15 秒以上才有返回，但是 UI 层面的用户不能忍受长时间的等待
// 需要做一种立即返回的 response，但是服务成功与否需要通过另外的途径通知
var request = require('request');


function longTimeService() {
    return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('resolve 1s');
                // throw new Error('reject 1s ') will not work
                // see: https://stackoverflow.com/questions/30715367/why-can-i-not-throw-inside-a-promise-catch-handler
                // reject('reject 1s');

            }, 1000);
        }).then(function (data) {
            console.log('in then ' + data)
            request('https://www.google.com', function (error, response, body) {
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                console.log('body:', body); // Print the HTML for the Google homepage.
            });
            return data + ' 2';
        }, function (err) {
            console.log('in rejection' + err);
        })
        .catch(err => {
            console.log('in long time service catch')
            // reject(err)
            throw err;
        })
}

function longTimeService2() {
    return Promise.resolve()
        .then(function (resolve, reject) {
            setTimeout(function () {
                resolve('resolve 1s');
                // reject('reject 1s');
            }, 1000);
        }).catch(err => {
            console.log('in long time service catch')
            // reject(err)
            throw err;
        })

}

function timeup(duration) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve('5s'), duration);
    });
}

function longTimeServiceRight() {
    return timeup(1000).then(function (data) {
        console.log(data);
    }).catch(function (err) {
        console.log(err);
    })
}


async function main(cb) {
    console.log(new Date().getTime())
    try {
        let re = await longTimeService();
        console.log(new Date().getTime())
        cb(null, re);
    } catch (err) {
        cb(err);
    }
}

// main(function (data) {
//     console.log(data);
// })

async function mainAsync(cb) {
    console.log(new Date().getTime())
    let promise;
    try {
        promise = longTimeService();
    } catch (err) {
        console.log(`in main caught error: ${err}\n`);
    }
    promise
        .then(data => cb(null, data))
        .catch(err => cb(err))
    console.log(new Date().getTime())
}

// main(function (err, data) {
//     if (err) console.log(err)
//     else console.log('in cb ' + data)
// })

function testAsyncErrorHandler() {
    new Promise(function (resolve, reject) {
            request('http://service.com/upload', function (error, response, body) {
                reject('just test catch'); // this will work, it can be caught by promise.catch
                // throw new Error('it is not error, just test throw error') // cannot invoke catch below!!! can only caught by process.on uncaughtException
                // Promise.reject('test static reject method')
            });
            // return Promise.reject('test static reject method') // will not work
        }
    ).catch(function (err) {
        console.log(typeof err);
        console.log(err);
    })
}

try {
    testAsyncErrorHandler();
} catch (err) {
    console.log('in catch with sync type'); // won't work!!!!!! 
    console.log(typeof err);
    console.log(err);
}

process.on('uncaughtException', (err) => {
    console.log(`Caught uncaughtException: ${err}\n`);
});