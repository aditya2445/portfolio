const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config()
const app = express();
const PORT = process.env.PORT||5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle contact form submission
app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, contact, message } = req.body;

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Choose your email provider
    auth: {
      user: process.env.EMAIL_USER, // Replace with your email
      pass: process.env.EMAIL_PASS, // Replace with your app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: 'Aditya Mohaty',
    to: `${email}`, // The email address that will receive the form data
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <h1>Contact Form Submission</h1>
      <p>Your Form has reached to me soon we will get connect</p>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p>Thnaks for connecting Me</p>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

// Default Route
app.get('/', (req, res) => {
  res.send('Backend server is running.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
