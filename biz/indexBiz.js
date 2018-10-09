const usersDB = require('../DB/users.js');
const { uploadFile } = require('../util/upload');
const staticPath = './upload-files';
const path = require('path') ;
const md5 = require('md5') ;

const Redis = require("ioredis");
const redis = new Redis();

const dbCrud = require('../libs/dbCrud.js')('loginStatus');


function init(router){
    router.post('/login.do',async ctx=>{//登录接口
        var obj = ctx.request.body,reO = _T.ckJ(obj,{username:'用户名,fk',pwd:'密码,fk'});
        if(reO.re){//如果验证成功
            let user ;
            obj.pwd = md5(obj.pwd);//采用md5加密
            user = await usersDB.login(ctx.orm(),obj);
            if(user.length===1){
                user  = user[0] ;
                 ctx.session.username = obj.username ;
                let arr =  await  dbCrud.select(ctx.orm(),{sqlWhere:'userId = ?',sqlWhereAr:[user.id]});
                for(let a = 0,d;d=arr[a];a++){
                    await redis.del('SESSION:'+d.sessionId);
                }
                await ctx.orm().query('delete from loginStatus where userId = ?',[user.id]);
                await dbCrud.add(ctx.orm(),{
                    sessionId:ctx.cookies.get('SESSIONID'),
                    stemFrom:'写死的PC',
                    userId:user.id,
                });
                ctx.body={success:'登录成功'};
            }else{
                ctx.body={fail:'用户名或密码错误'};
            }
        }else{
            ctx.body = {fail:'用户名或密码错误'};
        }
    });
    /**
     * 获取时间
     */
    router.post('/users/getTime.do',async ctx=>{
        ctx.body={time:_T.format(new Date()),success:'成功'};
    });

    /**
     * 上传文件
     */
    router.post('/file/uploadPhoto.do',async ctx=>{
        var obj = ctx.request.body,result ;
        var types = {1:'house',2:'base',3:'project'}[obj.fileType || '1'] ;
        // 上传文件请求处理
        let serverFilePath = path.join( __dirname, '../upload-files' );//保存文件的路径
        // 上传文件事件
        result = await uploadFile( ctx, {
            fileType: types, // common or album,保存的地址子路径
            path: serverFilePath
        });
        result.path = `/static/${types}/${result.path}`;
        ctx.body = result ;
    });
}
module.exports=init;