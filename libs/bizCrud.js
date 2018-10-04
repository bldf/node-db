module.exports = {
    /**
     * 去除参数校验id，的增加，单表
     */
    async add(ctx, checkDB, dbCrud) {
        var obj = ctx.request.body, reO = _T.ckJ(obj, checkDB('id'));
        if (reO.re) {//如果验证成功
            let user = await dbCrud.add(ctx.orm(), obj);
            if (user.dataValues) {
                ctx.body = {success: '增加成功'};
            } else {
                ctx.body = {fail: '增加失败'};
            }
        } else {
            ctx.body = {fail: reO.info};
        }
    },
    /**
     * 更具id修改
     */
    async up(ctx, checkDB, dbCrud) {
        var obj = ctx.request.body, reO, reo2;
        reO = _T.ckJ(obj, checkDB());
        if (reO.re) {//如果验证成功
            let user = await dbCrud.up(ctx.orm(), obj);
            if (user) {
                ctx.body = {success: '修改成功'};
            } else {
                ctx.body = {fail: '修改失败'};
            }
        } else {
            ctx.body = {fail: reO.info};
        }
    },
    /**
     * 更具id删除
     */
    async del(ctx, checkDB, dbCrud) {
        var obj = ctx.request.body, reO = _T.ckJ(obj, checkDB(['id']));
        if (reO.re) {//如果验证成功N
            let user = await dbCrud.del(ctx.orm(), obj);
            if (user.isNewRecord) {
                ctx.body = {success: '删除成功'};
            } else {
                ctx.body = {fail: '删除失败'};
            }
        } else {
            ctx.body = {fail: reO.info};
        }
    },
    /**
     * 查询,page ,rows ,其他字段
     */
    async select(ctx, checkDB, dbCrud) {
        let selectObj = ctx.request.body;
        let sqlO = _T.SQwhereByObj(checkDB(), _T.filterObj(checkDB(), selectObj));
        selectObj.sqlWhere = sqlO.sqlWhere;
        selectObj.sqlWhereAr = sqlO.sqlWhereAr;
        let rows = await dbCrud.select(ctx.orm(), selectObj);
        let total = await dbCrud.getTotal(ctx.orm(), selectObj);
        ctx.body = {rows, ...total};
    }
};