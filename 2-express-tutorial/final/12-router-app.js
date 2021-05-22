const express = require('express');
const app = express();
const peopleRoute = require('./routes/people')
const loginRoute = require('./routes/auth')

app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
// Use people rouer
app.use('/api/people',peopleRoute)

// use login route
app.use('/login',loginRoute)


app.listen(5000, () => {
    console.log('server listning on port 5000 ...');
})