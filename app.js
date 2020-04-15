const Koa = require("koa");

const app = new Koa();

app.use(async ctx => (ctx.body = "Sample Api Toko"));

app.listen(3000);