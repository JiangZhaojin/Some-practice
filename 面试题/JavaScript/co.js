function run(generatorFn) {
    let it = generatorFn();
    let result = it.next();
    return new Promise((resolve, reject) => {
        const next = function(result) {
            if(result.done) {
                resolve(result.value);
            }
            result.value = Promise.resolve(result.value);
            result.value
                .then(res => {
                    let result = it.next(res);
                    next(result);
                })
                .catch(err => {
                    reject(err);
                });
        }   
        next(result);   
    })
}