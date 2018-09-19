const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router');
const router = new Router() ;
const koaBody = require('koa-body');
const koaForm = require("formidable-upload-koa");
const options = {
    uploadDir: `${__dirname}/upload`,
    keepExtensions: true
};
router.post("/uploader",koaForm(options),  ctx => {
    // Access to
    // ctx.req.files
    // ctx.req.fields
    // The file has been uploaded in the folder choosen above.
    ctx.body = '上传成功了';
});




app.use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods())
    .use( async ( ctx ) => {

    if ( ctx.url === '/' && ctx.method === 'GET' ) {
        // 当GET请求时候返回表单页面
        let html = `
      <h1>koa2 upload demo</h1>
      <form method="POST" action="/uploader" enctype="multipart/form-data">
        <p>file upload</p>
        <span>picName:</span><input name="picName" type="text" /><br/>
        <input name="file" type="file" /><br/><br/>
        <button type="submit">submit</button>
      </form>
    `
        ctx.body = html

    } else if ( ctx.url === '/upload.json' && ctx.method === 'POST' ) {
        // 上传文件请求处理
        let result = { success: false }
        let serverFilePath = path.join( __dirname, 'upload-files' )

        // 上传文件事件
        result = await uploadFile( ctx, {
            fileType: 'album', // common or album
            path: serverFilePath
        })

        ctx.body = result
    } else {
        // 其他请求显示404
        // ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
})

app.listen(3000, () => {
    console.log('[demo] upload-simple is starting at port 3000')
})