const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gpa: {type: Number, default: 4.0},
    studyYear: {type: Number, default: 1}
})

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;