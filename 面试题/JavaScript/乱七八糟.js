['1','2','3'].map(function(item,index,array){
    return parseInt(item,index); // 是不是一目了然
});

// parseInt("1",0); => 1
// parseInt("2",1); => NaN
// parseInt("3",2); => NaN

// 变量声明提升
if(!("a" in window)){
    var a = 10;
}
console.log(a); // undefined


// 变种题
(function(){
    var  x = c =  b = {a:1}
})()
console.log(x.a); // error , x is not defined
console.log(c,b) // {a: 1} {a: 1}

// 优先级
var count = 0;
console.log(typeof count === "number"); // true , 这个不用解释了
console.log(!!typeof count === "number"); // false

// 正则
'abc345efgabcab'.replace(/\d/g,'[$&]');  // "abc[3][4][5]efgabcab"
