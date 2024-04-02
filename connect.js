const typeorm = require('typeorm');

const ProductEntity = require('./model/Product').ProductEntity;
const UserEntity = require('./model/User').UserEntity
const AddressEntity = require('./model/Address').AddressEntity



const dataSource = new typeorm.DataSource({
    type: "mariadb",
    host: process.env.HOST,
    port: 3306,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    entities: [ProductEntity, UserEntity, AddressEntity]
});

dataSource
    .initialize()
    .then( function() {
        console.log("Connected to database")
    })
    .catch( function(error) {
        console.log("Problem in connecting to database", error)
    })

module.exports = { dataSource }