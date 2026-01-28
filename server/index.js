const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'https://word-out-three.vercel.app'],
    credentials: true
}));
app.use(bodyParser.json());

// In-memory store for subscribers and messages
const subscribers = [];
const messages = [];

// Helper to validate email
const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Simple Admin Auth Middleware
const ADMIN_PASSWORD = 'secret-admin-password'; // In production, use env var
const authenticateAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader === ADMIN_PASSWORD) {
        next();
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
};

// Routes
app.get('/', (req, res) => {
    res.send('WordOut API is running');
});

// Admin Routes
app.get('/admin/subscribers', authenticateAdmin, (req, res) => {
    res.json({ success: true, subscribers });
});

app.get('/admin/messages', authenticateAdmin, (req, res) => {
    res.json({ success: true, messages });
});

app.post('/admin/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        res.json({ success: true, token: ADMIN_PASSWORD });
    } else {
        res.status(401).json({ success: false, message: 'Invalid password' });
    }
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
    const newMessage = { id: Date.now(), name, email, message, date: new Date() };
    messages.push(newMessage);
    console.log('New Contact Message:', newMessage);

    return res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully!' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
