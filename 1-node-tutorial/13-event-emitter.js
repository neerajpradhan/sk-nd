const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved for user ${name} with id ${id}`);
})

customEmitter.on('response', ()=>{
    console.log('another logic');
})

customEmitter.emit('response','john',34);