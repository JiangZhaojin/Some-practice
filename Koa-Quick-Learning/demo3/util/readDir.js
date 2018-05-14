/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-13 22:54:28 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-13 23:19:52
 */

const fs = require('fs')
const walk = require('./walk')

function readDir (url, reqPath) {
  let contentList = walk(reqPath)
  let html = '<ul>'
  contentList.forEach(name => {
    html = `${html}<li><a href="${url === '/' ? '' : url}/${name}">${name}</a></li>`
  })
  return `${html}</ul>`
}

module.exports = readDir