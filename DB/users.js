var userDB = {
    /**
     * 更具用户名和密码，查询是否存在此用户
     */
    async login(ctxOrm,obj){
        return  await ctxOrm.sql.select()
                .from('users')
                .where('username = "'+obj.username+'" and pwd = "'+obj.pwd+'"')
                .query();
    }
}
module.exports = userDB ;