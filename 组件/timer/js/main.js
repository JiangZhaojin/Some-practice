var clock;
window.onload = function(){
	var button = document.getElementsByTagName("button")[0];
	// 不管ie啦
	button.addEventListener("click", function(e){
		clearInterval(clock);
        var pattern = /^\d{4}\/((0[1-9])|(1[0,1,2]))\/((0[1-9])|([1-2][0-9])|(3[0,1]))$/;
        var targetStr = document.getElementsByTagName("input")[0].value;
        var targetTime = new Date(targetStr);
        var showEle = document.getElementById("show");
        clock = setInterval(function(){ count();},500);
        function count(){
        	if (targetStr.match(pattern)) {
        	var nowTime = new Date();
        	var gap = targetTime - nowTime;
        	if (gap < 0) {
                showEle.innerHTML = "请输入未来的时间";
                clearInterval(clock);
                return;
        	} else if (gap == 0) {
        		showEle.innerHTML = "到达时间啦！";
        		clearInterval(clock);
        		return;
        	} else {
                var day = Math.floor(gap/(1000*60*60*24));
                var hour = Math.floor(gap/(1000*60*60)%24);
                var minute = Math.floor(gap/(1000*60)%60);
                var second = Math.floor(gap/1000%60);
                showEle.innerHTML = "距离"+targetStr+"还有"+day+"天"+hour+"小时"+minute+"分"+second+"秒";
        	}
            } else {
            	showEle.innerHTML = "请输入正确格式的时间";
            }
        }

	});
}