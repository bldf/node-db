const join = require('path').join;
const config = {
    name: 'node-db',
    modelPath: join(__dirname, '../DB/models'),
    db: 'db_lvyou',//数据库名称
    username: 'debian-sys-maint',//用户名
    password: 'g5JakQk06DVmD85E',//密码
    dialect: 'mysql',//数据库类型
    host: '127.0.0.1',//ip地址
    port: 3306,//端口
    pool: {
        maxConnections: 10,//最大链接数量
        minConnections: 0,//最小链接数量
        maxIdleTime: 30000//最大等待时间
    }
};
module.exports = config;