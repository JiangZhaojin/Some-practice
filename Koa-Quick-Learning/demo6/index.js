/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-14 17:13:41 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-14 17:28:42
 */

const Koa = require('koa')
const views = require('koa-views')
const path = require('path')

const app = new Koa()

app.use(views(path.join(__dirname, 'views'), {
  extension: 'ejs'
}))

app.use(async (ctx, next) => {
  let content = 'Hello Ejs template'
  await ctx.render('index', {
    content
  })
})

app.listen(3000, () => {
  console.log('3000 has been listened.')
})