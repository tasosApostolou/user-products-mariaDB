const productEntity = require('../model/Product').ProductEntity
const dataSource = require('../connect').dataSource;

async function findAll() {
    const result = await dataSource
        .getRepository(productEntity)
        .createQueryBuilder()
        .select("product")
        .from(productEntity, 'product')
        .getMany()

    return result
}


async function findOne(id) {

    const result = await dataSource
        .getRepository(productEntity)
        .createQueryBuilder()
        .select('product')
        .from(productEntity, 'product')
        .where("product.id = :id", {id: id})
        .getOne()
 
    return result;
}

async function create(product, cost, description, quantity ) {
    const result = await dataSource
        .getRepository(productEntity)
        .createQueryBuilder()
        .insert()
        .into(productEntity)
        .values([
            {
            product: product,
            cost:cost,
            description:description,
            quantity:quantity
        }
        ])
        .execute()
        .catch(error => console.log(error))
    
    return result;
}

async function update(data) {
    const result = await dataSource
        .getRepository(productEntity) 
        .createQueryBuilder()
        .update(productEntity) 
        .set({ product: data.product, cost: data.cost, description: data.description, quantity: data.quantity }) 
        .where("id = :id", { id: data.id })
        .execute()
        .catch(error => console.error(error)); 

    return result;
}

async function deleteProduct(id) {
    const result = await dataSource
        .getRepository(productEntity)
        .createQueryBuilder()
        .delete()
        .from(productEntity)
        .where("id = :id", {id: id})
        .execute()
        .catch(error => console.log(error))
    
    return result;
}

module.exports = { findAll, findOne, create, update, deleteProduct }