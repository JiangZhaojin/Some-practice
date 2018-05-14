/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-13 21:56:49 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-14 23:06:35
 */

const path = require('path')
const readDir = require('./readDir')
const readFile = require('./readFile')
const fs = require('fs')

function content(ctx, fullStaticPath) {
  let reqPath = path.join(fullStaticPath, ctx.url)
  let content = ''
  if (!fs.existsSync(reqPath)) {
    content = '404 Not Found !'
  } else {
    let stat = fs.statSync(reqPath)
    if (stat.isDirectory()) {
      content = readDir(ctx.url, reqPath)
    } else {
      content = readFile(reqPath)
    }
  }
  return content
}

module.exports = content