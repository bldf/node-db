const Redis = require("ioredis");
const { Store } = require("koa-session2");
class RedisStore extends Store {
    constructor() {
        super();
        this.redis = new Redis();
    }

    /**
     * 获取reedis中的session
     * @param sid
     * @param ctx
     * @returns {Promise.<void>}
     */
    async get(sid, ctx) {
        let data = await this.redis.get(`SESSION:${sid}`);
        return JSON.parse(data);
    }

    /**
     * 设置redis中的session
     * session object
     * @param session
     * @param sid
     * @param maxAge
     * @param ctx
     * @returns {Promise.<*>}
     */
    async set(session, { sid =  this.getID(24), maxAge = 1000000 } = {}, ctx) {
        try {
            // Use redis set EX to automatically drop expired sessions
            await this.redis.set(`SESSION:${sid}`, JSON.stringify(session), 'EX', maxAge / 1000);
        } catch (e) {}
        return sid;
    }

    /**
     * 删除redis中的session
     * @param sid
     * @param ctx
     * @returns {Promise.<*>}
     */
    async destroy(sid, ctx) {//删除session
        return await this.redis.del(`SESSION:${sid}`);
    }
}

module.exports = RedisStore;