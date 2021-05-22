const express = require('express');

const app = express();

// req => middleware => res

const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date();
    console.log(method, url, time.toLocaleDateString());
    next();
}
app.get('/',logger, (req, res)=>{
    res.send('Home page');
})

app.get('/about', logger, (req, res)=>{
    res.send('About page');
})

app.listen(5000, ()=>{
    console.log('server listning on port 5000 ...');
})