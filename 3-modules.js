// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternate-flavour');
require('./7-mind-grenade')
// console.log(data)

// sayHi('test')
// sayHi(names.john)
// sayHi(names.peter)