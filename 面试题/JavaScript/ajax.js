function ajax(config) {
    if(!config || !config.url) {
        throw new Error('config and config.url is required');
    }
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(200 <= xhr.status < 300 || xhr.status == 304) {
                    resolve(xhr.responseText);
                } else {
                    reject('HTTP Error: status code is' + xhr.status);
                }
            }
        }
        xhr.open(config.method || 'GET', config.url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(config.data);
    });
}