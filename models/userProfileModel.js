const mongoose = require('mongoose');


const profileInfoUpdate = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone_number: { type: String },
    address: { type: String },
    job_title: { type: String },
    work_experience: { type: String },
    skills: { type: String },
    degree_name: { type: String },
    university: { type: String },
    year_of_passing: { type: Number },
    gpa: { type: Number },
})



const User = mongoose.model('Users', profileInfoUpdate);
module.exports = User;