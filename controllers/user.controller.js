const userService = require('../services/user.services');

exports.findAll = async(req, res) => {
    console.log("Find all Users");
    try {
        const result = await userService.findAll();
        res.status(200).json({data: result});
        console.log("Success in reading all users");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in reading all users");
    }
}

exports.findOne = async(req, res) => {
    
    const id = req.params.id;
    
    console.log("Find user:", id);
    try {
        const result = await userService.findOne(id);
        res.status(200).json({data: result});
        console.log("Success in reading user");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in reading user");
    }
}

exports.create = async(req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;
    // const name = req.body.name;
    // const surname = req.body.surname;
    // const email = req.body.email
    const data = req.body
    // console.log("Insert user");

    try {
        const result = await userService.create(data)
        res.status(200).json({data: result});
        console.log("Success in inserting user");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in inserting user");
    }
}

exports.update = async(req, res) =>{
    const id = req.params.id
    console.log("Update User with id:", id)

    try {
        const result = await userService.update(req.body)
        res.status(200).json({data: result});
        console.log("Success in updating user");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in updating user");
    }
}

exports.delete = async(req, res) =>{
    const id = req.params.id
    console.log("Delete User with id:", id)

    try {
        const result = await userService.deleteUser(id)
        res.status(200).json({data: result});
        console.log("Success in deleting user");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in deleting user");
    }
}
