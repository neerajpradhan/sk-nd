const express = require('express');
const app =express();
const {products} = require('./data');


app.get('/', (req, res)=>{
    // res.json([{name:'john', age:34}, {name:'tesla', age:45}]);
    res.json(products);

})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...');
})