const EntitySchema = require('typeorm').EntitySchema;

class Address {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }
}

const AddressEntity = new EntitySchema({
    name: "Address",
    target: "Address",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        area: {
            type: "varchar"
        },
        road: {
            type: "varchar"
        }
},
relations: {
    users: {
        type: 'one-to-many',
        target: 'Address',
        inverseSide: 'address',
        cascade: true,
    },
},
});

module.exports = { AddressEntity }