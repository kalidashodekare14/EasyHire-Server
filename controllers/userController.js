const mongooos = require('mongoose');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_EXPIRED } = require('../constants/index');


// User Register
const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashPassword = await bcrypt.hash(password, 14);
        const newUser = new User({
            name,
            email,
            password: hashPassword,
            role
        })
        res.status(201).json({
            success: true,
            message: 'User Registered Successfully',
            data: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        })
    } catch (error) {
        console.log('User Registeration Failed', error);
        res.status(500).json({
            success: false,
            messsage: 'User Registeration Failed',
        })
    }
}

// User Login

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email and password'
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: JWT_EXPIRED
        })
        res.status(200).json({
            success: true,
            message: 'User Logged in Successfully',
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token
            }
        })
    } catch (error) {
        console.log('User Login Failed', error);
        res.status(500).json({
            success: false,
            message: 'User Login Failed'
        })
    }
}



module.exports = { registerUser, loginUser };