Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    var _this = this
    var args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
      // 因为返回了一个函数，我们可以 new F()，所以需要判断
      if (this instanceof F) {
        return new _this(...args, ...arguments)
      }
      return _this.apply(context, args.concat(...arguments))
    }
}

Function.prototype.myCall = function (context, ...args) {
    let caller = Symbol('caller');
    context = context || window;
    context[caller] = this;
    var result = context[caller](...args);
    delete context[caller];
    return result;
}

Function.prototype.myApply = function (context, args = []) {
    let apply = Symbol('apply');
    context = context || window;
    context[apply] = this;
    var result = context[apply](...args);
    delete context[apply];
    return result;
}