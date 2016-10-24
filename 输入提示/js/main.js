var data = ['a', 'at', 'arive', 'athi', 'are', 'abo', 'abo', 'aere'];
var inputEle = document.getElementsByTagName('input')[0];
var listEle = document.getElementById("list");
var list = document.getElementsByTagName("li");

inputEle.addEventListener('input', oninput);

function oninput(event){
    event = event || window.event;
    var target = event.target || event.srcElement;
    var pattern = new RegExp("^"+target.value, "i");
    var listStr = "";
    var list;

    for (var i = 0; i < data.length; i++) {
    	if(pattern.test(data[i])) {
            list = document.createElement("li");
            list.addEventListener('click', selectText);
            list.innerHTML = data[i];
            listStr += list;
    	}
    }
    if (listStr) {
    	listEle.innerHTML = listStr;
    } else {
    	listEle.innerHTML = "";
    }
}

function selectText(event){
    event = event || window.event;
    var target = event.srcElement || event.target;
    inputEle.value = target.innerHTML;
}