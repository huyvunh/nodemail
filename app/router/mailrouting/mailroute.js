const express = require('express');
const router = express.Router();
const mailController = require('../../controller/mailController')

//router.post('/sendEmail', mailController.sendEmailController)
router.post('/mail/resetPinCode', mailController.resetPinCode)

module.exports = router;