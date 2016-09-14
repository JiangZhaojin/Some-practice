var imgList = document.getElementsByClassName('img-list')[0];
var circleList = document.querySelectorAll(".circle li");
// 指针
var currentID = 0;
var nextID = 0;
var clickID;
// 计时器
var timerIn;
var timer;
for (var i = 0; i < circleList.length; i++) {
	circleList[i].index = i;
}
// 移动距离
var per = imgList.offsetWidth/circleList.length;
function moveTo(pos){
    var far = -pos * per;
    imgList.style.left = far+"px";
}
function rotate(){
	currentID = nextID;
	if(clickID){
		nextID = clickID;
	} else {
		nextID = currentID > 3? 0 : nextID+1;
	}
	circleList[nextID].className = 'active';
	circleList[currentID].className = '';
	moveTo(nextID);
}
setInterval(function(){ rotate();},2000);