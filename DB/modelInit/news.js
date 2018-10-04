/**
 * 数据库表名，默认就是当前文件的名称
 * @type {init}
 */
const  ckD = require('../../libs/checkDB.js') ;
const  dbFn = function(types){
    return {
        id: {type: types.STRING, primaryKey: true},
        title: types.STRING,
        types: types.STRING,
        content: types.STRING,
        describes: types.STRING,
        field1: types.STRING,
        field2: types.STRING,
        field3: types.STRING,
    }
};
 module.exports={
    dbFn,
     tableName:__filename.substring(__filename.lastIndexOf('/')+1,__filename.length-3),
     /**
      *
      * @param arr {array | string }, 获取制定的key,簺选 , 如果是string ,代表去除的参数
      * @returns {{houseType: string, title: string, price: string, bedType: string, bedPosition: string, capacity: string, acreage: string, types: string, describes: string}}
      */
    checkDB(arr){ // 获取增加参数验证
         return ckD(arr,dbFn,{
             id:'参数id,ll1-99999',
             title:'新闻标题,fk',
             types:'新闻类型,ll1-8',
             describes:'描述,fk',
             content:'新闻内容,fk',
         });
    }
};
