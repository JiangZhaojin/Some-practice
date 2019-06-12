let lazyLoad = (function() {
    let imgList = [...document.querySelectorAll('img')];
    let totalImg = imgList.length;
    let count = 0;
    let deleteList = [];
    return function() {
        imgList.forEach((img, index) => {
            let rect = img.getBoundingClientRect();
            if(rect.top < window.innerHeight) {
                img.src = img.dataset.src;
                count ++;
                deleteList.push(index);
            }
        });
        if(count === totalImg) {
            document.removeEventListener('scroll', lazyLoad);
        }
        imgList = imgList.filter((img, index) => !deleteList.includes(index))
    }
}());

function initLazyLoad() {
    lazyLoad();
    document.addEventListener('scroll', lazyLoad);
}