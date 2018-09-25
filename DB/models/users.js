function init(sequelize,types){
  var users = sequelize.define("users", {
        id        : {type: types.STRING, primaryKey: true},
        username  :  types.STRING,
        pwd       :  {type:types.STRING},
        email     :  types.STRING,
        phone     :  types.STRING,
        type      :  types.STRING,
        field1    :  types.STRING,
        field2    :  types.STRING,
        field3    :  types.STRING
    }, {
      tableName: 'users'
  });
    // users.associate = (models) => {
    //     Bar.belongsTo(models.Foo, {
    //         foreignKey: 'foo'
    //     });
    // };
  return users ;
}
module.exports = init;