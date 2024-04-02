const addressEntity = require('../model/Address').AddressEntity
const dataSource = require('../connect').dataSource;

async function findAll() {
    const result = await dataSource
        .getRepository(addressEntity)
        .createQueryBuilder()
        .select("address")
        .from(addressEntity, 'address')
        .getMany()

    return result
}


async function findOne(id) {

    const result = await dataSource
        .getRepository(addressEntity)
        .createQueryBuilder()
        .select('address')
        .from(addressEntity, 'address')
        .where("address.id = :id", {id: id})
        .getOne()
 
    return result;
}

async function create(area, road) {
    const result = await dataSource
        .getRepository(addressEntity)
        .createQueryBuilder()
        .insert()
        .into(addressEntity)
        .values([
            {
            area: area,
            road:road,
        }
        ])
        .execute()
        .catch(error => console.log(error))
    
    return result;
}

async function update(data) {
    const result = await dataSource
        .getRepository(addressEntity) 
        .createQueryBuilder()
        .update(addressEntity) 
        .set({ area: data.area, road: data.road}) 
        .where("id = :id", { id: data.id })
        .execute()
        .catch(error => console.error(error)); 

    return result;
}

async function deleteaddress(id) {
    const result = await dataSource
        .getRepository(addressEntity)
        .createQueryBuilder()
        .delete()
        .from(userEntity)
        .where("id = :id", {id: id})
        .execute()
        .catch(error => console.log(error))
    
    return result;
}

module.exports = { findAll, findOne, create, update, deleteaddress }