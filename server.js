// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');

// create an instance of express to serve our end points
const app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// const routes = require('./routes/routes.js')(app, fs);
const userRoutes = require('./routes/user')
const classRoutes = require('./routes/class')
app.use('/user', userRoutes)
app.use('/class', classRoutes)

const server = app.listen(3000, () => {
  console.log('listening on port %s...', server.address().port);
});