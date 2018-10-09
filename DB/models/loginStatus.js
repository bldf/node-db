const  {dbFn,tableName} = require('../modelInit/'+(__filename.substring(__filename.lastIndexOf('/')+1,__filename.length)));
function init(sequelize, types) {
    var house = sequelize.define(tableName,dbFn(types), {
        tableName
    });
    return house;
}
module.exports= init;