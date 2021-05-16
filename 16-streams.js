const {createReadStream} = require('fs');

// const stream = createReadStream('./content/big.txt')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
const stream = createReadStream('./content/big.txt',{highWaterMark:90000,
encoding:'utf-8'})

stream.on('data',(chunk)=>{
    console.log(chunk);
})

stream.on('error',(err)=>{
    console.log(err);
})