const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI)

conn.on('error', console.error.bind(console, 'mongoose connection error: '));
conn.once('open', function () {
  console.log('Connected with MongoDB');
});


module.exports = {
  TaskSchema: conn.model("Task", require("./schemas/taskSchema")),
  UserSchema: conn.model("User", require("./schemas/userSchema")),
};
