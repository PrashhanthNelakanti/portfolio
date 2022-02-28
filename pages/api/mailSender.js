export default async function handler(req, res) {
    switch (req.method) {
        case 'POST': {
            return sendOtp(req, res);
        }
    }
}

async function sendOtp(req, res) {
    try {
        const nodemailer = require('nodemailer');

        const body = req.body;
        console.log(await body.info)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'prashhanth.online@gmail.com',
                pass: 'rock@1234A'
            }
        });
        var mailOptions = {
            from: 'prashhanth.online@gmail.com',
            to: body.email,
            subject: body.fname,
            html: `<h1>Here is the Otp</h1>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        return res.json({
            message: `Post added successfully ${req.body}`,
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}



