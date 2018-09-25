const usersDB = require('../DB/users.js');
var md5 = require('md5') ;
function init(router){
    router.post('/login.do',async ctx=>{//登录接口
        var obj = ctx.request.body,reO = _T.ckJ(obj,{username:'用户名,fk',pwd:'密码,fk'});
        if(reO.re){//如果验证成功
            let user ;
            obj.pwd = md5(obj.pwd);//采用md5加密
            user = await usersDB.login(ctx.orm(),obj);
            if(user.length===1){
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

        // ctx.body={time:_T.format(new Date()),success:'成功'};
    });



}
module.exports=init;