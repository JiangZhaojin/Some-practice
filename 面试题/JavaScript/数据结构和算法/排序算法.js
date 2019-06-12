// 冒泡排序
// 时间复杂度 O(n*n)
function bubbleSort(array) {
    if (!Array.isArray(array)) {
        return;
    }
    for (let i = array.length - 1; i > 0; i --) {
        for (let j = 0; j < i; j ++) {
            if (array[j] > array[j + 1]) {
                let cache = array[j];
                array[j] = array[j + 1];
                array[j + 1] = cache;
            }
        }
    }
    return array;
}

bubble([3, 5, 0, 1, 4, 2])

// 插入排序
// 时间复杂度 O(n*n)
function insertSort (array) {
    if (!Array.isArray(array)) {
        return;
    }

    for (let i = 1; i < array.length; i ++) {
        for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) {
            let cache = array[j + 1];
            array[j + 1] = array[j];
            array[j] = cache;
        }
    }

    return array;
}

insertion([6, 3, 0, 4, 2, 1, 7])

// 选择排序
// 时间复杂度 O(n*n)
function selectSort (array) {
    if (!Array.isArray(array)) {
        return;
    }
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let cache = array[minIndex];
            array[minIndex] = array[i];
            array[i] = cache;
        }
    }
    return array;
}

selectSort([6, 3, 0, 4, 2, 1, 7])

// 归并排序
// 时间复杂度 O(n*logN)
function mergeSort (array) {
    if (!Array.isArray(array)) {
        return;
    }
    function merge(array, left, right) {
        if (left >= right) return;
        let mid = parseInt(left + ((right - left) >> 1));
        merge(array, left, mid);
        merge(array, mid + 1, right);
        let help = [];
        let i = 0;
        let p1 = left;
        let p2 = mid + 1;
        while(p1 <= mid && p2 <= right) {
            help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++];
        }
        while(p1 <= mid) {
            help[i++] = array[p1++];
        }
        while(p2 <= right) {
            help[i++] = array[p2++];
        }
        for(let i = 0; i < help.length; i++) {
            array[left + i] = help[i];
        }
        return array;
    }

    return merge(array, 0, array.length - 1);
}

mergeSort([6, 3, 0, 4, 2, 1, 7])

// 快速排序
// 时间复杂度 O(n*logn)
function quikSort(array) {
    if (array.length < 2) {
        return array;
    }
    let mid = array[0];
    let left = [];
    let right = [];
    let middle = [];
    array.forEach(item => {
        if(item === mid) {
            middle.push(item);
        } else if(item > mid) {
            right.push(item);
        } else {
            left.push(item);
        }
    });
    return quikSort(left).concat(middle).concat(quikSort(right));
}

quikSort([6, 3, 0, 4, 2, 1, 7]);