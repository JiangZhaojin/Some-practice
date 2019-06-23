// 原地洗牌算法
function shuffle(array) {
    for(let i = 0; i < array.length; i ++) {
        let randomIndex = i + Math.floor(Math.random() * (array.length - i));
        [array[randomIndex], array[i]] = [array[i], array[randomIndex]];
    }
    return array;
}

// 非原地洗牌算法
function shuffle2(array) {
    let _array = [];
    while(array.length) {
        let randomIndex = Math.floor(Math.random() * array.length);
        _array.push(array.splice(randomIndex, 1));
    }
    return _array;
}