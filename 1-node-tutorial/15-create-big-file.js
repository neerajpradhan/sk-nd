const {writeFile} = require('fs');
for (let i=0; i<10000; i++){

    writeFile('./content/big.txt',`This is a big file ${i} \n`,{flag: 'a'},()=>{
    });
}