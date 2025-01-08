const mongoose = require('mongoose');

// define mongodb connection url
const mongoURL = 'mongodb://127.0.0.1:27017/mydatabaseDeepu'

//set up mongodb connection
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

// get the default connection
const db = mongoose.connection;

// define events
db.on('connected', () => {
    console.log('Connected to mongodb server');
});

db.on('error', () => {
    console.error('mongodb connection error');
});

db.on('disconnected', () => {
    console.log('mongodb disconnected');
});

// export the database connection
module.exports = db;