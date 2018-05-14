/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-13 23:19:12 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-14 22:49:17
 */

const fs = require('fs')

module.exports = function (filepath) {
  return fs.readFileSync(filepath)
}