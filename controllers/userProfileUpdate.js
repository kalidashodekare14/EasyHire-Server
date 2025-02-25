const mongoose = require('mongoose');
const userProfileUpdate = require('../models/userProfileModel');


// Personal Information Save
const savePersonalInformation = async (req, res) => {
    try {
        const { name, email, phone_number, address } = req.body;
        const newUser = await userProfileUpdate.put({
            name,
            email,
            phone_number,
            address
        })
        res.status(201).json({
            success: true,
            message: 'Personal Information Saved Successfully',
            data: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                phone_number: newUser.phone_number,
                address: newUser.address
            }
        })
    } catch (error) {
        console.log('Personal Information Save Failed', error);
        res.status(500).json({
            success: false,
            messsage: 'Personal Information Save Failed',
        })
    }
}

const saveProfessionalInformation = async (req, res) => {
    try {
        const { job_title, work_experience, skills } = req.body;
        const newUser = await userProfileUpdate.put({
            job_title,
            work_experience,
            skills
        })
        res.status(201).json({
            success: true,
            message: 'Professional Information Saved Successfully',
            data: {
                id: newUser._id,
                job_title: newUser.job_title,
                work_experience: newUser.work_experience,
                skills: newUser.skills
            }
        })
    } catch (error) {
        console.log('Professional Information Save Failed', error);
        res.status(500).json({
            success: false,
            messsage: 'Professional Information Save Failed',
        })
    }
}


// Education Information Save
const saveEducationInformation = async (req, res) => {
    try {
        const { degree_name, university, year_of_passing, gpa } = req.body;
        const newUser = await userProfileUpdate.put({
            degree_name,
            university,
            year_of_passing,
            gpa
        })
        res.status(201).json({
            success: true,
            message: 'Education Information Saved Successfully',
            data: {
                id: newUser._id,
                degree_name: newUser.degree_name,
                university: newUser.university,
                year_of_passing: newUser.year_of_passing,
                gpa: newUser.gpa
            }
        })
    } catch (error) {
        console.log('Education Information Save Failed', error);
        res.status(500).json({
            success: false,
            messsage: 'Education Information Save Failed',
        })
    }
}



module.exports = { savePersonalInformation, saveProfessionalInformation, saveEducationInformation }