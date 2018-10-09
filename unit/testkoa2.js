const Koa = require('koa') ;
const app = new Koa() ;
const Router = require('koa-router');
const router = new Router() ;
const bodyParser = require('koa-bodyparser');

router.get('/',(ctx,next)=>{
    ctx.body ='<h2>测试ajax</h2><script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>' ;
})
    .get('/test',(ctx,next)=>{
        let url = ctx.url;
        let request = ctx.request;
        let req_query = request.query;
        // let req_queryString = request.queryString;
        console.log(req_query,ctx.params) ;
    ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
})
    .get('/abc',(ctx,next)=>{
ctx.body={aaaaaaaaaa:'99999999'} ;
})
    .post(/set\/getP[1|2|3]\.do/,(ctx,next)=>{
        console.log(ctx.request.path.match(/\d+/)[0]);
        ctx.body={afadf:'asdfasdf'} ;
    });
app .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(async (ctx) => {
        let o = {404:'404',500:'服务器遇到内部错误',202:'服务器已接受请求，但尚未处理',503:'服务器超时',302:'无权操作'};
       if(o[ctx.status]){//如果没有正常的处理请求
           ctx.body={fail:o[ctx.status]};
       }
})
app.listen(3100) ;
console.log('[demo] start-quick is starting at port 3000')