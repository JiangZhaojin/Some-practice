
function timeout (mSeconds) {
    setTimeout(() => {
        timer();
        timeout(mSeconds);
    }, 1000);
}

function timer(mSeconds) {
    var time = (new Date(mSeconds)) - (new Date());

    var day = parseInt(time / 1000 / 60 / 60 / 24, 10);
    var hour = parseInt(time/ 1000/ 60/ 60 % 24, 10);
    var min = parseInt(time / 1000 /60 % 60, 10);
    var second = parseInt((time / 1000) % 60, 10);

    document.getElementById('day').innerHTML = day;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('second').innerHTML = second;
}