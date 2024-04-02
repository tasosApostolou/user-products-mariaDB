const productService = require('../services/product.services');

exports.findAll = async(req, res) => {
    console.log("Find all Products");
    try {
        const result = await productService.findAll();
        res.status(200).json({data: result});
        console.log("Success in reading all products");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in reading all products");
    }
}

exports.findOne = async(req, res) => {
    
    const id = req.params.id;
    
    console.log("Find product:", id);
    try {
        const result = await productService.findOne(id);
        res.status(200).json({data: result});
        console.log("Success in reading product");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in reading product");
    }
}

exports.create = async(req, res) => {
    const product = req.body.product;
    const cost = req.body.cost;
    const description = req.body.description;
    const quantity = req.body.quantity
    console.log("Insert product");

    try {
        const result = await productService.create(product, cost, description, quantity)
        res.status(200).json({data: result});
        console.log("Success in inserting product");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in inserting product");
    }
}

exports.update = async(req, res) =>{
    const id = req.params.id
    console.log("Update Product with id:", id)

    try {
        const result = await productService.update(req.body)
        res.status(200).json({data: result});
        console.log("Success in updating product");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in updating product");
    }
}

exports.delete = async(req, res) =>{
    const id = req.params.id
    console.log("Delete Product with id:", id)

    try {
        const result = await productService.deleteProduct(id)
        res.status(200).json({data: result});
        console.log("Success in deleting product");
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in deleting product");
    }
}

