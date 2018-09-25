const  tableName = 'house' ;
var DB = {
    /**
     * 增加
     */
    async add(orm,obj,ctx){
        return  await  new orm.house(obj).save();
    },
    /**
     * 修改
     */
    async up(orm,obj){
        return  await _T.DBupById(obj,tableName,orm) || [];
    },
    /**
     * 删除
     */
    async del(orm,obj){
        return  await  new orm.house(obj).destroy();
    },
    /**
     * 查询
     */
    async select(orm,obj){
        //如果没有 offset 就是页数
        return  await  orm.sql.select().from(tableName).limit(obj.rows || 30).offset(obj.page || 1).query();
    },
    /**
     * 获取通条数
     * @param orm
     * @returns {Promise.<void>}
     */
    async getTotal(orm){
        return  await  orm.queryOne(`select count(id) total from ${tableName}`) ;
    }
}
module.exports = DB ;