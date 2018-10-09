const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const config = require('../../config/database.js') ;
const orm = require('koa-orm')(config);
const usersDB = require('../../DB/users.js');
const houseDB = require('../../DB/house.js');
require('../../util/tool');//全局加载工具类
app.use(bodyParser());//加载　获取参数的中间件



app.use(orm.middleware);//加载数据库查询链接对象 orm
/******* Begin 加载业务逻辑层  *******/
const Router = require('koa-router');
const router = new Router() ;

router.get('/a.do',ctx=>{//加载测试页面，为了方便可以发送 ajax
    ctx.body=`<h1>本页面为测试页面</h1><script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>`;
});
router.post('/test',async ctx=>{//测试获取前台传递过来的参数
    var obj = ctx.request.body;
    ctx.body = await usersDB.login(ctx.orm(),obj);
});
router.post('/test1',async ctx=>{//测试获取前台传递过来的参数
    var obj = ctx.request.body;
    ctx.body = await houseDB.add(ctx.orm(),obj,ctx);
});

router.post('/houseup',async ctx=>{//测试获取前台传递过来的参数
    var obj = ctx.request.body;
    ctx.body = await houseDB.update(ctx.orm(),obj,ctx);
});


app.use(router.routes())
    .use(router.allowedMethods()) ;
/******* 加载业务逻辑层   End*******/



app.listen(5000, () => {
    console.log('后台node服务启动成功，端口： 5000')
});
module.exports = app ; 