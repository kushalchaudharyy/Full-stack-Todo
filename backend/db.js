const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kushalchaudhary052:mkthQURpVZfERPPO@cluster0.tv2u4si.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}