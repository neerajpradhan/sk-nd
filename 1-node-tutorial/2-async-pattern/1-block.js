// npm - global command, comes with node
//npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm i -g <packageName>
// sudo npm i -g <packageName>

// package.json - menifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log("hello!");

const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Home page")
    } else  if(req.url === '/about'){
        res.end('About page');
        for (let i=0; i<1000; i++){
            for (let j=0; j<100; j++){
                console.log(i, j);
            }
        }
    } else {
        res.end('Error page');
    }
})

server.listen(5000, ()=>{
    console.log('Server is listening on port : 5000...');
})