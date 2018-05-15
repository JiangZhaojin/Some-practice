/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-14 15:54:08 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-14 16:17:18
 */

const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  if (ctx.url === '/index') {
    ctx.cookies.set('jiangzhaojin', 'hello world', {
      domain: 'localhost',
      path: '/index',
      maxAge: 10 * 60 * 1000,
      expires: new Date('2018-05-15'),
      httpOnly: false,
      overwrite: false
    })
    ctx.body = 'cookie is set'
  } else {
    ctx.body = 'hello world'
  }
})

app.listen(8080, () => {
  console.log('port 8080 has been listened')
})