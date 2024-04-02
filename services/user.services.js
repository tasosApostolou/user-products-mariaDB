const userEntity = require('../model/User').UserEntity
const dataSource = require('../connect').dataSource;

async function findAll() {
    const result = await dataSource
        .getRepository(userEntity)
        .createQueryBuilder()
        .select("user")
        .from(userEntity, 'user')
        .getMany()

    return result
}


async function findOne(id) {

    const result = await dataSource
        .getRepository(userEntity)
        .createQueryBuilder()
        .select('user')
        .from(userEntity, 'user')
        .where("user.id = :id", {id: id})
        .getOne()
 
    return result;
}

// async function create(username, password, name, surname, email ) 
async function create(data ) {
    const result = await dataSource
        .getRepository(userEntity)
        .save(data)
        .then(() => console.log("User has been saved"))
        // .createQueryBuilder()
        // .insert()
        // .into(userEntity)
        // .values([
        //     {
        //     username: username,
        //     password:password,
        //     name:name,
        //     surname:surname,
        //     email:email
        // }
        // ])
        // .execute()
        .catch((error) => console.log(error))
    
    return result;
}

async function update(data) {
    const result = await dataSource
        .getRepository(userEntity) 
        .createQueryBuilder()
        .update(userEntity) 
        .set({ username: data.username, password: data.password, name: data.name, surname: data.surname, email: data.email }) 
        .where("id = :id", { id: data.id })
        .execute()
        .catch(error => console.error(error)); 

    return result;
}

async function deleteUser(id) {
    const result = await dataSource
        .getRepository(userEntity)
        .createQueryBuilder()
        .delete()
        .from(userEntity)
        .where("id = :id", {id: id})
        .execute()
        .catch(error => console.log(error))
    
    return result;
}

module.exports = { findAll, findOne, create, update, deleteUser }