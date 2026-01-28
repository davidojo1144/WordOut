# WordOut - Digital Agency Platform

A modern, full-stack web application for a digital agency offering marketing and automation services. Built with React, Node.js, and modern UI tools.

**Live Demo:**
- **Frontend:** [https://word-out-three.vercel.app/](https://word-out-three.vercel.app/)
- **Backend:** [https://wordout-backend.onrender.com](https://wordout-backend.onrender.com)

## 🚀 Features

### Frontend (Client)
- **Modern UI/UX**: Built with **React** and **Tailwind CSS** for a responsive and clean design.
- **Dark Mode 🌙**: Fully supported light and dark themes with a smooth toggle switch.
- **Animations ✨**: Engaging entry and hover animations using **Framer Motion**.
- **Toast Notifications 🍞**: Real-time feedback for user actions using **React Hot Toast**.
- **Admin Dashboard 🕵️‍♂️**: A protected area to view form submissions and subscribers.
- **Interactive Forms**: Functional Contact and Newsletter Subscription forms.

### Backend (Server)
- **REST API**: Built with **Node.js** and **Express**.
- **Secure Admin Routes**: Protected endpoints for viewing data (Subscribers & Messages).
- **Data Handling**: In-memory storage for form submissions (Contact & Newsletter).
- **CORS Configured**: Securely connected to the production frontend.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, React Router DOM, React Hot Toast
- **Backend**: Node.js, Express, CORS, Body-parser
- **Deployment**: Vercel (Frontend), Render (Backend)

## 📂 Project Structure

```
WordOut/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components (Hero, Navbar, etc.)
│   │   ├── context/        # Global state (ThemeContext)
│   │   ├── pages/          # Page components (Home, Contact, Admin)
│   │   └── ...
│   └── ...
└── server/                 # Node.js Backend
    ├── index.js            # Main server file with API routes
    └── ...
```

## 🔐 Admin Access

To access the admin dashboard in the live demo or locally:
1. Navigate to `/admin/login`
2. Use the password: `secret-admin-password`

## 🏃‍♂️ Getting Started Locally

### Prerequisites
- Node.js installed

### 1. Setup Backend
```bash
cd server
npm install
node index.js
# Server runs on http://localhost:3000
```

### 2. Setup Frontend
```bash
cd client
npm install
npm run dev
# App runs on http://localhost:5173
```

## 🔮 Future Improvements
- **Database**: Integrate MongoDB for persistent data storage.
- **Authentication**: Implement JWT-based auth for more secure admin access.
- **Testing**: Add unit and integration tests.
