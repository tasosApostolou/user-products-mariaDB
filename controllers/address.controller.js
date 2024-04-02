const addressService = require('../services/address.services');

exports.findAll = async(req, res) => {
    console.log("Find all Address");
    try {
        const result = await addressService.findAll();
        res.status(200).json({data: result});
        console.log("Success in reading all address");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in reading all address");
    }
}

exports.findOne = async(req, res) => {
    
    const id = req.params.id;
    
    console.log("Find address:", id);
    try {
        const result = await addressService.findOne(id);
        res.status(200).json({data: result});
        console.log("Success in reading address");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in reading address");
    }
}

exports.create = async(req, res) => {
    const area = req.body.area;
    const road = req.body.road;
    console.log("Insert address");

    try {
        const result = await addressService.create(area, road)
        res.status(200).json({data: result});
        console.log("Success in inserting address");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in inserting address");
    }
}

exports.update = async(req, res) =>{
    const id = req.params.id
    console.log("Update Address with id:", id)

    try {
        const result = await addressService.update(req.body)
        res.status(200).json({data: result});
        console.log("Success in updating addresss");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in updating address");
    }
}

exports.delete = async(req, res) =>{
    const id = req.params.id
    console.log("Delete Adress with id:", id)

    try {
        const result = await addressService.deleteaddress(id)
        res.status(200).json({data: result});
        console.log("Success in deleting address");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in deleting address");
    }
}


