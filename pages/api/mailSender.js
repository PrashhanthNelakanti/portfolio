export default async function handler(req, res) {
    console.log(await "In mailsnder")
    switch (req.method) {
        case 'POST': {
            return addPost(req, res);
        }
    }
}

async function addPost(req, res) {
    try {
        const nodemailer = require('nodemailer');

        const body = req.body;
        console.log(await body.info)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${process.env.EMAIL}`,
                pass: `${process.env.EMAIL_PWD}`
            }
        });
        var mailOptions = {
            from: `${process.env.EMAIL}`,
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



