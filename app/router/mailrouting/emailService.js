const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
require('dotenv/config')

exports.sendEmailService = async (email) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 5000,
        secure: true,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const info = await transporter.sendMail({
        from: '"Huy Vũ" <huyyvuxxx204@gmail.com>', // sender address
        to: "huyyvuxxx204@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
}