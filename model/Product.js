const EntitySchema = require('typeorm').EntitySchema;

class Product {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }
}

const ProductEntity = new EntitySchema({
    name: "Product",
    target: "Product",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        product: {
            type: "varchar"
        },
        cost: {
            type: "double"
        },
        description: {
            type: "varchar"
    },
    quantity: {
        type: "int"
    }
}
})

module.exports = { ProductEntity }