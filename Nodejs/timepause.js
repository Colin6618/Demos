/* pause 函数可以让一个函数暂停运行一段时间（ms）以后继续运行。例如：

async function run() {
    console.log('Hello')
    await pause(1000) // 续一秒
    console.log('World') // 一秒以后继续运行
}

请你完成 pause 函数的编写。
*/

async function run() {
    console.log('Hello', new Date().getTime())
    await pause2(1000) // 续一秒
    console.log('World', new Date().getTime()) // 一秒以后继续运行
}

const pause = async (time) => {
    let ms = new Date().getTime();
    while (new Date() < ms + time) {}
    return true;
}

const pause2 = async (time) => {
    return new Promise(resolve => setTimeout(resolve, time)) 
}

run()