var userDB = {
    /**
     * 更具用户名和密码，查询是否存在此用户
     */
    async login(ctxOrm,obj){
        return  await ctxOrm.sql.select()
                .from('users')
                .where('username = ? and pwd = ?',obj.username,obj.pwd)
                .query();
    }
}
module.exports = userDB ;