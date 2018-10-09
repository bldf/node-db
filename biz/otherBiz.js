const Redis = require("ioredis");
const redis = new Redis();
function checkDB(){
    return {
        title:'标题,fk',
        bz1:'描述1,fk',
        bz2:'描述2,fk',
        topImg:'图片地址,wz',
        topVideo:'视频地址,wz',
        imgType:'1视频2图片,ll1-2',
        logoUrl:'logo地址,wz'
    };
}
function init(router){
    router.post(/\/set\/setSetPage[1|2|3|4|5]\.do/,async ctx=>{//设置设置
        let obj = ctx.request.body,reO,ckObj =checkDB();
        let imgType = ctx.request.path.match(/\d+/)[0] ;
        imgType==5&&(delete ckObj.imgType ,delete ckObj.topImg,delete ckObj.topVideo,delete ckObj.logoUrl);
        reO= _T.ckJ(obj,ckObj);
        if(reO.re){//如果验证成功
           obj.upTime = _T.format(new Date());
           obj.type = ({1:'网站首页',2:'客房中心',3:'新闻公告',4:'特色项目',5:'联系我们'})[imgType] ;
           await redis.set('setPage'+imgType,JSON.stringify(obj));
           ctx.body = {success:'保存成功！'};
        }else{
            ctx.body = {fail:reO.info};
        }
    });
    router.post(/\/set\/getSetPage[1|2|3|4|5]\.do/,async ctx=>{//查询设置
            let type = ctx.request.path.match(/\d+/)[0] ;
            let value = await redis.get('setPage'+type);
            ctx.body = {success:'查询成功！',value};
    });
}

module.exports=init ;