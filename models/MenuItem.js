const mongoose = require('mongoose');

// define MenuItem schema
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    taste: {
        type: String
    },
    is_drink: {
        type: Boolean
    }

})

// create MenuItem model
const menuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = menuItem;