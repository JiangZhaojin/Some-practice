/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-13 21:19:20 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-14 23:09:08
 */

const Koa = require('koa')
const path = require('path')
const content = require('./util/content')
const mime = require('./util/mime')

let static = '/static'

const app = new Koa()

function parseMime(ctx) {
  let extName = path.extname(ctx.url)
  extName = extName ? extName.slice(1) : 'unknown'
  return mime[extName]
}

app.use(async (ctx, next) => {
  let fullStaticPath = path.join(__dirname, static)
  console.log(fullStaticPath)
  let _content = content(ctx, fullStaticPath)
  let _mime = parseMime(ctx)
  if (_mime) {
    ctx.type = _mime
  }
  if (_mime && _mime.includes('image/')) {
    ctx.res.writeHead(200)
    ctx.res.write(_content, 'binary')
    ctx.res.end()
  } else {
    ctx.body = _content
  }
})

app.listen(8080, () => {
  console.log('Port 8080 has been listened.')
})

process.on('error', err => {
  console.log(err)
})