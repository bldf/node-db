const dbCrud = require('../libs/dbCrud.js')('house');
const bizCrud = require('../libs/bizCrud.js');
const {checkDB} = require('../DB/modelInit/house.js');
function init(router){
    router.post('/house/addMsg.do',async ctx=>{//增加客房
        await bizCrud.add(ctx,checkDB,dbCrud);
    });

    router.post('/house/delMsg.do',async ctx=>{//删除客房
        await bizCrud.del(ctx,checkDB,dbCrud);
    });

    router.post('/house/upMsg.do',async ctx=>{//修改客房
        await bizCrud.up(ctx,checkDB,dbCrud);
    });

    router.post('/house/getPre.do',async ctx=>{//查询上一个客房
        let obj = ctx.request.body,reO = _T.ckJ(obj,checkDB(['id','types']));
        if(reO.re){//如果验证成功
            ctx.body = await dbCrud.select(ctx.orm(),{page:1,rows:1,sqlWhere:' id < ? and types = ? ',sqlWhereAr:[obj.id,obj.types]});
        }else{
            ctx.body = {fail:reO.info};
        }
    });
    router.post('/house/getNext.do',async ctx=>{//查询下一个客房
        let obj = ctx.request.body,reO = _T.ckJ(obj,checkDB(['id','types']));
        if(reO.re){//如果验证成功
            ctx.body = await dbCrud.select(ctx.orm(),{page:1,rows:1,sqlWhere:' id > ? and types = ? ',sqlWhereAr:[obj.id,obj.types]});
        }else{
            ctx.body = {fail:reO.info};
        }
    });

    router.post('/house/getHouseMsg.do',async ctx=>{//查询客房
        var selectObj = ctx.request.body,reO = _T.ckJ(selectObj,checkDB(['types']));
        if(reO.re){//如果验证成功
            await bizCrud.select(ctx,checkDB,dbCrud);
        }else{
            ctx.body = {fail:reO.info};
        }
    });
}
module.exports=init;