function init(db,orm){
  return   db.define("users", {
        id        : Number,
        username  : String,
        pwd       : String,
        email     : String,
        phone     : String,
        type      : String,
        field1    : String,
        field2    : String,
        field3    : String
    }, {
        methods: {
            add: function () {
                console.log(this) ;
                return this.username + ' id->' + this.id;
            }
        },
        validations: {
            username: orm.enforce.ranges.length(2, 20, "用户名必须是2个字符到20个字符"),
            pwd: orm.enforce.ranges.length(2, 20, "密码必须是3个字符到20个字符")
        }
    });
}

module.exports = init;