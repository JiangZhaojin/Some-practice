// 实现trim方法
String.prototype.myTrim = function () {
    return this.replace(/(^\s*)|(\s*$)/, '');
}