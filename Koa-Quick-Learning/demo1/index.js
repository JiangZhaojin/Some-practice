/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-13 04:00:08 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-13 04:34:35
 */

const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

app.use(async (ctx, next) => {
  let url = ctx.request.url;
  let html = await route(url);
  console.log(html);
  ctx.body = html;
}).listen(8080)

console.log('App is listening at port 3000;');

async function route(url) {
  let view = '404.html';
  switch (url) {
    case '/': 
      view = 'index.html';
      break;
    case '/about':
      view = 'about.html';
      break;
    default:
      view = '404.html';
      break;
  }
  return await render(view);
}

function render(tpl) {
  return new Promise((resolve, reject) => {
    let viewUrl = `./views/${tpl}`;
    fs.readFile(viewUrl, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data)
      }
    })
  })
}