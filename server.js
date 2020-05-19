const exp = require('express');
const app = exp();
const nodemailer = require('nodemailer');
require('dotenv').config();

app.get('/:email/:text', (req,res) => {

    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: 'afsarzahin2@gmail.com',
    to: 'afsarzahin@gmail.com',
    subject: 'Message from zahin nodemailer',
    text: req.params.text
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        res.send("failed");
    }
    res.send("Email done!!!");
});
})


const port=process.env.PORT || 3000;
app.listen(port);
