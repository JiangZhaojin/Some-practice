// 递归实现路径查找
let data = {
    a: {
        b: 1
    }
}

function findNode(pathArr, data) {
    if((Array.isArray(pathArr) && pathArr.length === 0) || !data) {
        return;
    }
    if(pathArr.length === 1) {
        return data[pathArr[0]];
    } else {
        return findNode(pathArr.slice(1), data[pathArr[0]]);
    }
}

findNode(['a', 'b'], data);