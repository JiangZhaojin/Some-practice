let myImage = (function () {
    let img = document.createElement('img');
    document.body.append(img);
    return {
        setSrc (src) {
            img.src = src;
        }
    }
})();

let proxyImg = (function () {
    let img = new Image();
    img.onload = function () {
        myImage.src = this.src;
    }
    return {
        setSrc (src) {
            myImage.setSrc('/loading.png');
            img.src = src;
        }
    }
})();