/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-15 11:37:54 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-15 14:34:44
 */

const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  let result = {
    success: false,
    msg: ''
  }
  if (ctx.method === 'GET') {
    if (ctx.url === '/getJSON.json') {
      result.msg = ctx.url
    } else {
      result.msg = 'get nothing.'
    }
  } else if (ctx.method === 'POST') {
    result.msg = 'get post data.'
  } else {
    result.msg = '404 not font.'
  }
  ctx.body = result
})

app.listen(3000, () => {
  console.log('listening 3000 port···')
})

module.exports = app