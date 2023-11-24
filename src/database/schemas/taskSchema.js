const {Schema} = require("mongoose");

//Eschema de Tarea
const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    iduser:{
        type: String,
        required: true
    },

    isCompleted: {
        type: Boolean,
        default: false      
    }
});


module.exports =  taskSchema;

