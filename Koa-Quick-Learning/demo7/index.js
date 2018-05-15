/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-14 19:07:59 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-14 21:20:06
 */

const Koa = require('koa')
const path = require('path')
const fs = require('fs')
const {uploadFile} = require('./upload.js')

const uploadDir = 'upload'

const app = new Koa()

app.use(async ctx => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    ctx.body = `
      <h1>请上传任意文件</h1>
      <form method="POST" action="/upload.json" enctype="multipart/form-data">
        <input type="file" name="file" /><br/>
        <button type="submit">上传</button>
      </form>
    `
  } else if (ctx.url === '/upload.json' && ctx.method === 'POST') {
    ctx.body = await uploadFile(ctx, {
      path: path.join(__dirname, uploadDir)
    })
  } else {
    ctx.body = '<h1>404 Not Font !</h1>'
  }
})

app.listen(3000, () => {
  console.log('port 3000 has been listened...')
})