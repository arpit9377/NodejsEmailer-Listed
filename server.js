require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', //   gmail account
        pass: process.env.PASSWORD || '1234' //  gmail password
    }
});


let mailOptions = {
    from: 'abc@gmail.com', //  email sender
    to: 'cba@gmail.com', // email receiver
    subject: 'Nodemailer - Test',
    text: 'Listed Assignment!!'
};


transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});
