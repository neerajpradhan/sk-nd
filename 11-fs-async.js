const {readFile, writeFile} = require('fs');
console.log('starting the task');
readFile('./content/first.txt','utf8',(err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = data;
    readFile('./content/second.txt','utf8',(err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = data;
        writeFile('./content/result-async.txt',
        `Here is the result : ${first} and ${second}\n`,
        {flag:'a'},(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
        
    })
})
console.log('starting new task');