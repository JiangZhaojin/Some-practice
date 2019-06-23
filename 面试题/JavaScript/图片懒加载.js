let lazyLoad = (function() {
    let imgList = [...document.querySelectorAll('img')];
    return function() {
        let deleteList = [];
        imgList.forEach((img, index) => {
            let rect = img.getBoundingClientRect();
            if(rect.top < window.innerHeight) {
                img.src = img.dataset.src;
                deleteList.push(index);
            }
        });
        imgList = imgList.filter((img, index) => !deleteList.includes(index));
        if(!imgList.length) {
            document.removeEventListener('scroll', lazyLoad);
        }
    }
}());

function initLazyLoad() {
    lazyLoad();
    document.addEventListener('scroll', lazyLoad);
}