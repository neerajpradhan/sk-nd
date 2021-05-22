const express = require('express')
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    if (name) {
        return res.status(201).send(`Welcome ${name}`);
    } else {
        return res.status(401).send('Please provide credentials');
    }
})

module.exports = router;