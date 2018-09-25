function init(sequelize, types) {
    var house = sequelize.define("house", {
        id: {type: types.STRING, primaryKey: true},
        houseType: types.STRING,
        title: types.STRING,
        imgUrl: types.STRING,
        price: types.STRING,
        bedType: types.STRING,
        bedPosition: types.STRING,
        capacity: types.STRING,
        acreage: types.STRING,
        describe: types.STRING,
        field1: types.STRING,
        field2: types.STRING,
        field3: types.STRING,
    }, {
        tableName: 'house'
    });
    return house;
}
module.exports = init;