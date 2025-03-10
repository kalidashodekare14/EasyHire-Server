const express = require('express');
const { savePersonalInformation, saveProfessionalInformation, saveEducationInformation } = require('../controllers/userProfileUpdate');
const router = express.Router();


// Profile Data Get
// router.get('/user_data/:email', userProfileGet);

router.patch('/personal_information/:userEmail', savePersonalInformation);
router.patch('/professional_information/:email', saveProfessionalInformation);
router.patch('/education', saveEducationInformation);


module.exports = router;
