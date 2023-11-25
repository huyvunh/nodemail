// const sendEmailService = require('../../app/router/mailrouting/emailService');

// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');

// exports.sendEmailController = async (req, res) => {
//     try {
//         const email = req.body;
//         if (email) {
//             const response = await sendEmailService(email)
//             return res.json(response)
//         }
//         return res.status(200).json({
//             status: 200, message: 'Send Email Success!'
//         })

//     } catch (error) {
//         return res.status(400).json({
//             status: 400, message: 'Request fail!'
//         })
//     }
// }

const mailer = require('./../mailer/mailer');
const mailVaildator = require('deep-email-validator');


exports.resetPinCode = async (req, res) => {
    try {
        const to = 'vlouis1102@skiff.com     ';

        const checkEmailIsReal = await mailVaildator.validate(String(to).toLowerCase().trim())
        console.log(checkEmailIsReal.valid)

        if (checkEmailIsReal.valid) {
            mailer.sendMailForgotPinCode(to, 1234, 'HUY VŨ')

            return res.status(200).json({
                status: 200, message: 'Mail sent!'
            })
        }else{
            return res.status(400).json({
                status: 400, message: 'Mail lom!'
            })
        }


     


    } catch (error) {
        return res.status(400).json({
            status: 400, message: 'Request fail!'
        })
    }
}