const dbCrud = require('../libs/dbCrud.js')('specialProject');
const bizCrud = require('../libs/bizCrud.js');
const {checkDB} = require('../DB/modelInit/specialProject.js');
function init(router){
    router.post('/specialProject/addMsg.do',async ctx=>{//增加
       await bizCrud.add(ctx,checkDB,dbCrud);
    });

    router.post('/specialProject/delMsg.do',async ctx=>{//删除
        await bizCrud.del(ctx,checkDB,dbCrud);
    });

    router.post('/specialProject/upMsg.do',async ctx=>{//修改
        await bizCrud.up(ctx,checkDB,dbCrud);
    });

    router.post('/specialProject/getHouseMsg.do',async ctx=>{//查询
        await bizCrud.select(ctx,checkDB,dbCrud);
    });
}
module.exports=init;