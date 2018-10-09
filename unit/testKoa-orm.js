const Koa = require('koa') ;
const app = new Koa() ;
const Router = require('koa-router');
const router = new Router() ;
const config = require('../config/database.js') ;
const orm = require('koa-orm')(config);
// const person= require('../model/users.js') ;
// console.log(orm);

// router.get('/',(ctx,next)=>{
//     ctx.body ='<h2>测试ajax</h2><script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>' ;
//
// })
//     .get('/test',(ctx,next)=>{
//         let url = ctx.url;
//         let request = ctx.request;
//         let req_query = request.query;
//         // let req_queryString = request.queryString;
//         console.log(req_query,ctx.params) ;
//     ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
// })
//     .get('/abc',(ctx,next)=>{
// ctx.body={aaaaaaaaaa:'99999999'} ;
// })
//     .post('/getP',(ctx,next)=>{
//         ctx.body={afadf:'asdfasdf'} ;
//     });
// app .use(koaBody())
//     .use(router.routes())
//     .use(router.allowedMethods())
//     .use(async (ctx) => {
//         let o = {404:'404',500:'服务器遇到内部错误',202:'服务器已接受请求，但尚未处理',503:'服务器超时',302:'无权操作'};
//        if(o[ctx.status]){//如果没有正常的处理请求
//            ctx.body={fail:o[ctx.status]};
//        }
// });
app.use(orm.middleware);
app.use(async function (ctx) {
    // var obj = await ctx.orm().sql.select().from('users').where({username:'张三',pwd:'234'}).query();
    // console.log(obj);
    //         console.log(ctx.orm().sql);
    var uuu =  ctx.orm().users ;
    // var obj = await uuu.find({username:'张三',pwd:'234'});
    // console.log(obj) ;
    // var aaa = new uuu({pwd:'23',username:'张三'}) ;
    // console.log('aaa',aaa.addFn());
    // console.log('aaa',aaa._modelOptions.methods.add(111) );
    // var PE =  await person(ctx.orm.database(),ctx.orm());
    // await  PE.find({id:2},function(err,po){
    //     console.log(po[0].pwd);
    // });
    // console.log(await ctx.orm().queryOne());
    console.log(await ctx.orm().sql.select().from('users').where("username='张三' and pwd='23'").query());
    // page  ; rows ;
    //分页查询
    // console.log(await ctx.orm().sql.select().from('users').limit(2).offset(3).querys());
    //如果没有 offset 就是一次查询多少数据
    // console.log(await ctx.orm().sql.select().from('users').limit(2).query());
    // const raws = await ctx.orm('test').sql.select().from('table').query();
    // const raws =await ctx.orm().sql.select().from('users').querys();
    ctx.body = 12;
});

app.listen(3000) ;
console.log('[demo] start-quick is starting at port 3000')