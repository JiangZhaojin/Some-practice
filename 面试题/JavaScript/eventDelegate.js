function eventDelegate (parentSelector, targetSelector, event, fn) {
    document.querySelectorAll(parentSelector).forEach(p => {
        p.addEventListener(event, triFunction);
    });

    function triFunction (event) {
        event = event || window.event;

        var target = event.target || event.srcElement;

        var currentTarget = event.currentTarget;

        while (target !== currentTarget) {
            if (target.matches(targetSelector)) {
                fn.apply(target, Array.prototype.slice.call(arguments));
            }
            target = target.parentNode;
        }
    }
}