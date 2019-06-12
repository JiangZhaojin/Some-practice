// 优雅处理async/await
async function errorCapture(asyncFun, ...args) {
    try {
        let res = await asyncFun(...args);
        return [null, res];
    } catch(err) {
        return [err, null];
    }
}