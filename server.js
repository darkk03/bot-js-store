const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/Store', { 
});

// Определение схемы и модели для товаров
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    // Добавь другие поля по необходимости
});

const Product = mongoose.model('Product', productSchema);

app.use(bodyParser.json());

// Роут для получения списка товаров
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
