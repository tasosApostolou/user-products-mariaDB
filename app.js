const express = require('express');
const app = express();
const port = 3000;

const dataSource = require('./connect').dataSource
const productRoute = require('./routes/product.route')
const userRoute = require('./routes/user.route')
const addressRoute = require('./routes/address.route')

app.use(express.json());

app.use('/api/products', productRoute);
app.use('/api/users', userRoute)
app.use('/api/address',addressRoute)

app.listen(port, () =>{
    console.log("Server is Up");
})