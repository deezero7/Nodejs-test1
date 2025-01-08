const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./db');

const Person = require('./models/person');
const MenuItem = require('./models/MenuItem.js');

app.get('/', function (req, res) {
  res.send('Welcome ')
})

app.get('/tu', (req, res) => { res.send(" oye tuu ")});
app.get('/mai', (req, res) => { res.send(" mai huu ")});
app.get('/hola', (req, res) => { res.send(" Hola ")});


// import the router files
const personRoutes = require('./routes/personRoutes.js');
const menuItemRoutes = require('./routes/menuItemRoutes.js');

// use of router
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

// comment
app.listen(3000, () => { console.log(" Server Running on port 3000 ")});