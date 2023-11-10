const {Schema} = require("mongoose");

const userSchema = new Schema({
    user: {
        type: String,
        required: true,
        min: 4,
        max: 25,
    },

    password: {
        type: String,
        required: true
    },

});


module.exports =  userSchema;
