// mocha 专门用来路由数据使用的
const Mocha = require("mocha");
const mocha = new Mocha({
    reporter:'mochawesome',
    reporterOptions:{
        reportDir:'./docs/mochawesome-reporter'//想把这个报表放到那里去
    }

});
mocha.addFile('./unit/DB/model.spec.db.js');
mocha.run(function(){
    console.log('mocha测试，执行结束，done');
    //************************注意这里这个必须要退出， 一定要记住。************************
    process.exit();
});