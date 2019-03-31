const Koa = require('koa')
const path = require('path')
const app = new Koa()
// const bodyParser = require('koa-bodyparser')
const static = require('koa-static');//加载静态资源
const staticPath = './upload-files';
const { uploadFile } = require('./util/upload');
const Router = require('koa-router');
const router = new Router() ;

// app.use(bodyParser())
app.use(static(
    path.join( __dirname,  staticPath)
))

app.listen(3000, () => {
    console.log('[demo] upload-simple is starting at port 3000')
})