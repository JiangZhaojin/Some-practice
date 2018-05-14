/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-13 23:19:59 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-14 23:02:33
 */

const fs = require('fs')

function walk(dirPath) {
  return fs.readdirSync(dirPath);
}

module.exports = walk