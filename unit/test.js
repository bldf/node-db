const orm = require("orm");
var _Person = require('../model/users.js') ;
var Person ;
orm.connect("mysql://debian-sys-maint:g5JakQk06DVmD85E@127.0.0.1/db_lvyou", function (err, db) {
    if (err) throw err;
    Person =_Person(db,orm);
    Person.find({id:2},function(err,po){
        console.log(po[0].pwd);
    });
});
