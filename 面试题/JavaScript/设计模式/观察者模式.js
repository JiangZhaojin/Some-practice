var obj = {
    value: 0
  }
  
  var proxy = new Proxy(obj, {
    set: function(target, key, value, receiver) { // {value: 0}  "value"  1  Proxy {value: 0}
      console.log('调用相应函数')
      Reflect.set(target, key, value, receiver)
    }
  })
  
  proxy.value = 1 // 调用相应函数