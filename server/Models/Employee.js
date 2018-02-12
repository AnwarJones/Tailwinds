const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationSchema = new Schema({
    school: { type: String, required: true },
    graduationYear: Date,
    major: { type: String, required: true },
    degree: { type: String, required: true },
});
const workExperienceSchema = new Schema({
    organization: { type: String, required: true },
    title: { type: String, required: true },
    beginYear: { type: String, required: true },
    endYear: { type: String, required: true }
});


const employeeSchema = new Schema({
    photoUrl: String,
    firstName:  { type: String, required: true },
    lastName:{ type: String, required: true },
    title: { type: String, required: true },
    academics:  [ educationSchema],
    experience:  [ workExperienceSchema],
    statement: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);