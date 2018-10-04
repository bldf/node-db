/**
 * 此文件夹下边一般不需要修改什么，只需要保持文件名称正确即可
 */
const  {dbFn,tableName} = require('../modelInit/'+(__filename.substring(__filename.lastIndexOf('/')+1,__filename.length)));
function init(sequelize, types) {
    var house = sequelize.define(tableName,dbFn(types), {
        tableName
    });
    return house;
}
module.exports= init;