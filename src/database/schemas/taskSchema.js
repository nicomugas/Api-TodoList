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
        requerid: true
    },

    isCompleted: {
        type: Boolean,
        dafault: false      
    }
});


module.exports =  taskSchema;

