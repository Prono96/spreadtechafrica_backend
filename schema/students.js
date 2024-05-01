const mongoose = require('mongoose');

const studentModel = {
    name: String,
    email: String,
    class: String,
    date: { type: Date, default: Date.now }
}

const schema = new mongoose.Schema(studentModel);

const studentSchema = mongoose.model('students', schema);



module.exports =  studentSchema;