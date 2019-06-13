['1','2','3'].map(function(item,index,array){
    return parseInt(item,index); // 是不是一目了然
});

// parseInt("1",0); => 1
// parseInt("2",1); => NaN
// parseInt("3",2); => NaN

