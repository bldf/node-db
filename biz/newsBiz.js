const dbCrud = require('../libs/dbCrud.js')('news');
const bizCrud = require('../libs/bizCrud.js');
const {checkDB} = require('../DB/modelInit/news.js');
function init(router){
    router.post('/news/addMsg.do',async ctx=>{//增加
        await bizCrud.add(ctx,checkDB,dbCrud);
    });

    router.post('/news/delMsg.do',async ctx=>{//删除
        await bizCrud.del(ctx,checkDB,dbCrud);
    });

    // router.post('/news/upMsg.do',async ctx=>{//修改
    //     await bizCrud.up(ctx,checkDB,dbCrud);
    // });

    router.post('/news/getPre.do',async ctx=>{//查询上一个客
        let obj = ctx.request.body,reO = _T.ckJ(obj,checkDB(['id','types']));
        if(reO.re){//如果验证成功
            let o = checkDB();
            delete  o.content ;
            o.updatedAt = true;
            ctx.request.body.selectFields=o;
            ctx.body = await dbCrud.select(ctx.orm(),{page:1,rows:1,sqlWhere:' id < ? and types = ? ',sqlWhereAr:[obj.id,obj.types]});
        }else{
            ctx.body = {fail:reO.info};
        }
    });
    router.post('/news/getNext.do',async ctx=>{//查询下一个
        let obj = ctx.request.body,reO = _T.ckJ(obj,checkDB(['id','types']));
        if(reO.re){//如果验证成功
            let o = checkDB();
            delete  o.content ;
            o.updatedAt = true;
            ctx.request.body.selectFields=o;
            ctx.body = await dbCrud.select(ctx.orm(),{page:1,rows:1,sqlWhere:' id > ? and types = ? ',sqlWhereAr:[obj.id,obj.types]});
        }else{
            ctx.body = {fail:reO.info};
        }
    });

    router.post('/news/getnewsMsg.do',async ctx=>{//查询
        var selectObj = ctx.request.body,reO = _T.ckJ(selectObj,checkDB(['types']));
        if(reO.re){//如果验证成功
            let o = checkDB();
                delete  o.content ;
                o.updatedAt = true;
            ctx.request.body.selectFields=o;
            await bizCrud.select(ctx,checkDB,dbCrud);
        }else{
            ctx.body = {fail:reO.info};
        }
    });
    /**
     * 查询一条数据
     */
    router.post('/news/getnewsMsgOne.do',async ctx=>{//查询
        var selectObj = ctx.request.body,reO = _T.ckJ(selectObj,checkDB(['types','id']));
        if(reO.re){//如果验证成功
            let o = checkDB();
            o.updatedAt = true;
            ctx.request.body.selectFields=o;
            await bizCrud.select(ctx,checkDB,dbCrud);
        }else{
            ctx.body = {fail:reO.info};
        }
    });
}
module.exports=init;