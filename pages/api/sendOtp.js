const nodemailer = require("nodemailer");

export default function sendOtp(to_emailAddress) {
    try {
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PWD
            },
            secure: true,
        });
        var mailOptions = {
            from: process.env.EMAIL,
            to: to_emailAddress,
            subject: 'OTP',
            html: `<h1>Here is the Otp</h1><p>${otp}</p>`
        };
        new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });
    } catch (error) {
        return {
            message: new Error(error).message,
            success: false,
        }
    }
}