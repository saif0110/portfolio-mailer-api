const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Replace these values with your own email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tauheed0110@gmail.com',
        pass: 'zhlvhzmzhfwhdyhs'
    }
});

// Endpoint to handle form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Create email message
    const mailOptions = {
        from: 'tauheed0110@gmail.com',
        to: 'tauheed0110@gmail.com',
        subject: 'New message from portfolio -contact',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending message');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully');
        }
    });
});

// Endpoint to handle form submission
app.post('/subscribe', (req, res) => {
    const { name, email } = req.body;

    // Create email message
    const mailOptions = {
        from: 'tauheed0110@gmail.com',
        to: 'tauheed0110@gmail.com',
        subject: 'User subscribed to portfolio',
        text: `Name: ${name}\nEmail: ${email}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending message');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully');
        }
    });
});
// Start server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
