const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

var MailConfig = {
    'host': 'smtp.gmail.com',
    'user': process.env.EMAIL_USERNAME,
    'pass': process.env.EMAIL_PASSWORD
}
// smtp.gmail.com gmail giới hạn 1 ngày 500 email với tài khoản thường, gsuite 1 ngày 2000 mail
var transport = nodemailer.createTransport(smtpTransport({
    pool: true,
    host: MailConfig.host,
    port: 465,
    secure: true, //true khi là port 465, false cho các port khác
    auth: {
        user: MailConfig.user,
        pass: MailConfig.pass
    }
}))

const resetpincode_tempate = require('./template/resetpincode');

exports.sendMailForgotPinCode = (to, pincode, fullname) => {
    let mailOptions = {
        from: '"ABC Company" <noreply@abc.com>',
        to: to,
        subject: 'RESET NEW PINCODE',
        html: resetpincode_tempate.html(pincode, fullname)
    }
    transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Email sent error : ' + error);

        } else {
            console.log('Email sent : ' + info.response);
        }
    });
}
