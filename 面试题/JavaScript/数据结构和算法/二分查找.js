function binSearch(target, arr, start, end) {
    start = start || 0;
    end = end || arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    if(start > end) {
        return -1;
    }
    if(target === arr[mid]) {
        return mid;
    } else if(target > arr[mid]) {
        return binSearch(target, arr, mid + 1, end);
    } else {
        return binSearch(target, arr, start, mid - 1);
    }
}

binSearch(7, [1, 2, 3, 4])