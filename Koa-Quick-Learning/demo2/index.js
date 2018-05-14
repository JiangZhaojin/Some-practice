/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-13 13:07:37 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-13 13:38:00
 */

 const Koa = require('koa')
 const Router = require('koa-router')
 const app = new Koa()

let home = new Router()
home.get('/', async (ctx) => {
  ctx.body = 'home'
})

let page = new Router()
page.get('/404', async ctx => {
  ctx.body = '404 page'
}).get('/about', async ctx => {
  ctx.body = 'about page'
})

let router = new Router()
router.use('/', home.routes())
router.use('/page', page.routes())

app.use(router.routes()).use(router.allowedMethods())

app.listen(8080, () => {
  console.log('port 8080 has been listened')
})