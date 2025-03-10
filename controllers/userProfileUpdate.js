const User = require('../models/userModel')



// Personal Information Save
const savePersonalInformation = async (req, res) => {
    try {
        const { userEmail } = req.params;
        const { name, email, phone_number, address } = req.body;
        const updateUser = await User.findOneAndUpdate(
            { email: userEmail },
            {
                name,
                email,
                phone_number,
                address
            },
            { new: true },
            // { upsert: true }
        )
        if (!updateUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(201).json({
            success: true,
            message: 'Personal Information Saved Successfully',
            data: {
                id: updateUser._id,
                name: updateUser.name,
                email: updateUser.email,
                phone_number: updateUser.phone_number,
                address: updateUser.address
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
        const { email } = req.params;
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }
        const { job_title, work_experience, skills } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const newUser = await User.findOneAndUpdate(
            { email },
            {
                $set: {
                    job_title,
                    work_experience,
                    skills
                }
            },
            { new: true }
        )
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



// // User Get

// const userProfileGet = async (req, res) => {
//     try {
//         const { email } = req.params;
//         const user = await userProfileUpdate.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }
//         res.status(200).json({
//             success: true,
//             message: 'User Get Successfully',
//             data: user
//         })
//     }
//     catch (error) {
//         console.log('User Get Failed', error);
//         res.status(500).json({
//             success: false,
//             messsage: 'User Get Failed',
//         })
//     }

// }


// Education Information Save
const saveEducationInformation = async (req, res) => {
    try {
        const { userEmail } = req.params;
        const { degree_name, university, year_of_passing, gpa } = req.body;
        const newUser = await User.findByIdAndUpdate(
            userEmail,
            {
                degree_name,
                university,
                year_of_passing,
                gpa
            }
        )
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