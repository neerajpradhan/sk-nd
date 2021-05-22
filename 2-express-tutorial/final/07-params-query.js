const express = require('express');
const { products } = require('./data');

const app = express();

// home page
app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>')

})

// get all products
app.get('/api/products', (req, res) => {
    const newProd = products.map((pro) => {
        const { id, name, image } = pro;
        return { id, name, image };
    })
    res.json(newProd);
})

// get the product details of given id
app.get('/api/products/:productID', (req, res) => {
    console.log(req.params);
    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID));

    if (!singleProduct) {
        return res.status(404).send('<h2>Product does not exist</h2>');
    }
    res.json(singleProduct);
})

// pass multiple params in the url (productID, reviewID)
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    res.send('Hello World');
})

// get result by query parameters
app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    let sortedProducts = [...products];
    const { search, limit } = req.query;

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if (limit) {
        sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({ success: true, data: [] });
    }

    return res.status(200).json(sortedProducts);

})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})