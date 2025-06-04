const mongoose = require('mongoose');

// MongoDB Schema
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    phone: {
        type:Number,
        required: true,
    },
    DOB: {
        type:String,
        required:true,
    }
})

// MongoDB Model
const student = mongoose.model('student', studentSchema);

module.exports = student;