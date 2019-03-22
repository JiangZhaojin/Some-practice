const Koa = require('koa');
const { readFileSync } = require('fs');
const path = require('path');

const app = new Koa();

app.use((ctx, next) => {
  const filePath = path.join(__dirname, ctx.path);
  console.log(filePath);
  let content = '';
  try {
    content = readFileSync(filePath, {
      encoding: 'utf-8'
    });
  } catch {
    content = JSON.stringify([]);
  }
  ctx.type = 'application/json';
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = content;
  console.log(ctx.body);
})

app.listen(8080, () => {
  console.log('Mock server is listening on 8080...');
});