const superAgent = require('supertest');
const app = require("./app");
function request() {
    return superAgent(app.listen());
}
describe('node 接口测试 - DB数据库查询测试', function () {
    // it('测试用户登录接口', function (done) {
    //         request()
    //             .post("/test")
    //             .send({username:'test001',pwd:'12345465456'})
    //             .expect('Content-Type', /json/)
    //             .expect(200)
    //             .end(function (err, res) {
    //                 console.log(res.body);
    //                  if(res.body){
    //                      done();
    //                  }else{
    //                      done(err);
    //                  }
    //         });
    // });
    // it('测试用户增加接口/test1', function (done) {
    //     request()
    //         .post("/test1")
    //         .send({title:'test001',pwd:'879987897879789897879798'})
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .end(function (err, res) {
    //             console.log('返回的结果值test1：=>',res.body);
    //             if(res.body){
    //                 done();
    //             }else{
    //                 done(err);
    //             }
    //         });
    // });
    it('测试用户增加接口/houseup', function (done) {
        request()
            .post("/houseup")
            .send({id:3,title:'123886',imgUrl:'7213'})
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                console.log('返回的结果值houseup：=>',res.body);
                if(res.body){
                    done();
                }else{
                    done(err);
                }
            });
    });
});