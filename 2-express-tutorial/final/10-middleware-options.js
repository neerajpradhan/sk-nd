const express = require('express');
const morgan = require('morgan');
const logger = require('./logger')
const authorize = require('./authorize');
const app = express();

// req => middleware => res
// middleware: own/custom, express and third party

// app.use([authorize,logger])
// app.use(express.static('./public'));
app.use(morgan('tiny'))
app.get('/', (req, res)=>{
    res.send('Home page');
})

app.get('/about',  (req, res)=>{
    res.send('About page');
})

app.get('/api/products',  (req, res)=>{
    res.send('Products page');
})

app.get('/api/items',  (req, res)=>{
    // console.log(req.user);
    res.send('Items page');
})


app.listen(5000, ()=>{
    console.log('server listning on port 5000 ...');
})