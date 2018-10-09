const Koa = require('koa');
const path = require('path');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const static2 = require('koa-static2');//加载静态资源
const staticPath = './upload-files';
const config = require('./config/database.js') ;
const orm = require('koa-orm')(config); // 查询数据使用
require('./util/tool');//全局加载工具类

/********  Begin 配置 session *********/
const session = require("koa-session2"); // 配置session
const Store = require("./libs/store.js");
app.use(session({//初始化保存sessionid
    store: new Store(),
    key: "SESSIONID",
}));

/********  配置 session  End*********/
app.use(bodyParser());//加载　获取参数的中间件
app.use(static2('static',path.join( __dirname,  staticPath))); // 加载静态资源

app.use(orm.middleware);//加载数据库查询链接对象 orm
/******* Begin 加载业务逻辑层  *******/
const Router = require('koa-router');
const router = new Router() ;
require('./biz/indexBiz.js')(router);//加载主要的业务逻辑层
require('./biz/houseBiz.js')(router);//加载客房业务逻辑层
require('./biz/specialProjectBiz.js')(router);//加载特色项目业务逻辑层
require('./biz/newsBiz.js')(router);//加载新闻业务逻辑
require('./biz/otherBiz.js')(router);//加载新闻业务逻辑
/******* 加载业务逻辑层   End*******/

/******* Begin　加载测试代码 ********/
require('./unit/testBiz.js')(router);//加载主要的业务逻辑层
/******* 　 加载测试代码  End********/

app.use(router.routes())
    .use(router.allowedMethods()) ;

app.listen(3000, () => {
    console.log('后台node服务启动成功，端口： 3000')
});
app.listen(3001, () => {
    console.log('后台node服务启动成功，端口： 3001')
});
app.listen(3002, () => {
    console.log('后台node服务启动成功，端口： 3002')
});