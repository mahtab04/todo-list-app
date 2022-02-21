const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    dueDate: {
        type: Date,
        required: true
    },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;

