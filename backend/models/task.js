const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    date: {type: Date, default: Date.now},
    category: String,
})

module.exports = mongoose.model("Task", TaskSchema)