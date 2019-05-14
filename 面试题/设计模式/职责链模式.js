// 业务代码
const order500 = function(orderType, pay, stock) {
    if ( orderType === 1 && pay === true ) {
      console.log('500 元定金预购, 得到 100 元优惠券')
    } else {
      return 'nextSuccess'
    }
  }
  
  const order200 = function(orderType, pay, stock) {
    if ( orderType === 2 && pay === true ) {
      console.log('200 元定金预购, 得到 50 元优惠券')
    } else {
      return 'nextSuccess'
    }
  }
  
  const orderCommon = function(orderType, pay, stock) {
    if (orderType === 3 && stock > 0) {
      console.log('普通购买, 无优惠券')
    } else {
      console.log('库存不够, 无法购买')
    }
  }
  
  // 链路代码
  const chain = function(fn) {
    this.fn = fn
    this.sucessor = null
  }
  
  chain.prototype.setNext = function(sucessor) {
    this.sucessor = sucessor
  }
  
  chain.prototype.init = function() {
    const result = this.fn.apply(this, arguments)
    if (result === 'nextSuccess') {
      this.sucessor.init.apply(this.sucessor, arguments)
    }
  }
  
  const order500New = new chain(order500)
  const order200New = new chain(order200)
  const orderCommonNew = new chain(orderCommon)
  
  order500New.setNext(order200New)
  order200New.setNext(orderCommonNew)
  
  order500New.init( 3, true, 500 ) // 普通购买, 无优惠券

// AOP模式

Function.prototype.after = function (fn) {
    let self = this;
    return function () {
        let result = self.apply(self, arguments);
        if (result === 'nextSuccess') {
            return fn.apply(self, arguments);
        }
    }
}