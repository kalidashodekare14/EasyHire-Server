const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    phone_number: { type: String },
    address: { type: String },
    job_title: { type: String },
    work_experience: { type: String },
    skills: { type: Array },
    degree_name: { type: String },
    university: { type: String },
    year_of_passing: { type: Number },
    gpa: { type: Number },
    // profile: {
    //     name: { type: String },
    //     email: { type: String },
    //     phone_number: { type: String },
    //     address: { type: String },
    //     job_title: { type: String },
    //     work_experience: { type: String },
    //     skills: { type: Array },
    //     degree_name: { type: String },
    //     university: { type: String },
    //     year_of_passing: { type: Number },
    //     gpa: { type: Number },
    // }
}, { timestamps: true });


const User = mongoose.model('Users', userSchema);
module.exports = User;