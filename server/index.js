const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory store for subscribers
const subscribers = [];

// Helper to validate email
const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Routes
app.get('/', (req, res) => {
    res.send('WordOut API is running');
});

app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    if (subscribers.includes(email)) {
        return res.status(409).json({ success: false, message: 'Email already subscribed' });
    }

    subscribers.push(email);
    console.log(`New subscriber: ${email}. Total subscribers: ${subscribers.length}`);

    return res.status(201).json({ 
        success: true, 
        message: 'Successfully subscribed!',
        count: subscribers.length
    });
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    // In a real app, you would save this to a database or send an email
    console.log('New Contact Message:', { name, email, message });

    return res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully!' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
