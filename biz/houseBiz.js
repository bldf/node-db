const mDB = require('../DB/house.js');
function checkDB(){
    return {
        houseType:'住宿类型,fk',
        title:'住宿标题,fk',
        price:'住宿价格,fk',
        bedType:'房床类型,fk',
        bedPosition:'额外床位,fk',
        capacity:'较大宾客容量,fk',
        acreage:'面积,fk',
        types:'客房类型,ll1-8',
        describes:'描述,fk',
    };
}
function init(router){
    router.post('/house/addMsg.do',async ctx=>{//增加客房
        var obj = ctx.request.body,reO = _T.ckJ(obj,checkDB());
        if(reO.re){//如果验证成功
            let user ;
            user = await mDB.add(ctx.orm(),obj);
            if(user.dataValues){
                ctx.body={success:'增加成功'};
            }else{
                ctx.body={fail:'增加失败'};
            }
        }else{
            ctx.body = {fail:reO.info};
        }
    });

    router.post('/house/delMsg.do',async ctx=>{//删除客房
        var obj = ctx.request.body,reO = _T.ckJ(obj,{id:'参数id,ll1-99999'});
        if(reO.re){//如果验证成功
            let user ;
            user = await mDB.del(ctx.orm(),obj);
            if(user.isNewRecord){
                ctx.body={success:'删除成功'};
            }else{
                ctx.body={fail:'删除失败'};
            }
        }else{
            ctx.body = {fail:reO.info};
        }
    });

    router.post('/house/upMsg.do',async ctx=>{//修改客房
        var obj = ctx.request.body,reO,reo2;
        reo2 =checkDB();
        reO = _T.ckJ(obj,reo2);
        if(reO.re){//如果验证成功
            let user ;
            user = await mDB.up(ctx.orm(),obj);
            if(user){
                ctx.body={success:'修改成功'};
            }else{
                ctx.body={fail:'修改失败'};
            }
        }else{
            ctx.body = {fail:reO.info};
        }
    });

    router.post('/house/getHouseMsg.do',async ctx=>{//查询客房
        var selectObj = ctx.request.body,reO = _T.ckJ(selectObj,{types:'客房类型,ll1-8'});
        if(reO.re){//如果验证成功
            let sqlO = _T.SQwhereByObj(checkDB(),_T.filterObj(checkDB(),selectObj));
            selectObj.sqlWhere = sqlO.sqlWhere ;
            selectObj.sqlWhereAr = sqlO.sqlWhereAr ;
            console.log(selectObj)
            let rows = await mDB.select(ctx.orm(),selectObj);
            let total = await mDB.getTotal(ctx.orm(),selectObj);
            ctx.body = {rows,...total};
        }else{
            ctx.body = {fail:reO.info};
        }
    });

}
module.exports=init;