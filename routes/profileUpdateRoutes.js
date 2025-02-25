const express = require('express');
const { savePersonalInformation, saveProfessionalInformation, saveEducationInformation } = require('../controllers/userProfileUpdate');
const router = express.Router();



router.post('/personal-information', savePersonalInformation);
router.post('/professional-information', saveProfessionalInformation);
router.post('/education', saveEducationInformation);

module.exports = router;
