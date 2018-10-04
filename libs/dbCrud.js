/**
 * 封装关于数据增加修改删除
 * @param tableName
 * @returns {*}
 */
function init (tableName){
    return {
        /**
         * 增加
         */
        async add(orm,obj,ctx){
            return  await  new orm[tableName](obj).save();
        },
        /**
         * 更具id修改
         */
        async up(orm,obj){
            return  await _T.DBupById(obj,tableName,orm) || [];
        },
        /**
         * 更具id删除
         */
        async del(orm,obj){
            return  await  new orm[tableName](obj).destroy();
        },
        /**
         * 查询,page ,rows ,其他字段
         */
        async select(orm,selectObj){
            //如果没有 offset 就是页数
            if(_T.type(selectObj.selectFields)==='object'){//如果指定查询某个字段
                 let sl = orm.sql.select().from(tableName);
                 let arr = Object.keys(selectObj.selectFields);
                    arr.forEach(function(n){
                        sl.field(n);
                    });
                    return  await  sl.where(selectObj.sqlWhere,...selectObj.sqlWhereAr).limit(selectObj.rows || 30).offset(selectObj.page?selectObj.page-1: 0).query();
            }else{
                return  await  orm.sql.select().from(tableName).where(selectObj.sqlWhere,...selectObj.sqlWhereAr).limit(selectObj.rows || 30).offset(selectObj.page?selectObj.page-1: 0).query();
            }
        },
        /**
         * 获取总数
         * @param orm
         * @returns {Promise.<void>}
         */
        async getTotal(orm,selectObj){
            return  await  orm.queryOne(`select count(id) total from ${tableName} ${selectObj.sqlWhere  ?'where '+selectObj.sqlWhere : ''}`,selectObj.sqlWhereAr?selectObj.sqlWhereAr:[]) ;
        }
    }
}
module.exports = init ;