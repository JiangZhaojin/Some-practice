/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-15 10:55:45 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-15 11:19:41
 */

const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  if (ctx.url.split('?')[0] === '/getJSONP.json' && ctx.method === 'GET') {
    let callback = ctx.query.callback || 'callback'
    ctx.type = 'text/javascript'
    ctx.body = `${callback}(alert("hello world"))`
  } else {
    ctx.body = 'GET JSONP.'
  }
})

app.listen(3000, () => {
  console.log('port 3000 has been listened...')
})