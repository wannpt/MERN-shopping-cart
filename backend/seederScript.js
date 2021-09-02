//Run only once.
require('dotenv').config();

const productData = require('./data/product');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

//delete everyting in MongoDB and put the data all over again.
const importData = async() => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productData);
    
        console.log('data import SUCCESS');
        process.exit();
    } catch (error) {
        console.error('data import FAILED:' + error);
        process.exit(1);
    }  
}

importData();