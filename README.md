# WordOut - Full Stack Developer Practical Test

## Project Overview

This repository contains the solution for the Full Stack Developer Practical Test. The project consists of a frontend built with React and Vite, and a backend built with Node.js and Express.

### Part 1: Website Build (Agency Skill)

A 1-2 page website for a fictional digital agency offering marketing and automation services.
- **Pages**: Homepage, Contact page
- **Features**: Hero section, Services section, Call-to-action, Mobile responsiveness
- **Tech Stack**: React, Vite, Tailwind CSS

### Part 2: Full Stack Logic (Product Skill)

A basic REST API with a subscription feature.
- **Endpoint**: `POST /subscribe`
- **Functionality**: Accepts email, validates format, checks for duplicates, and stores in an in-memory store.
- **Tech Stack**: Node.js, Express

## Part 3: Short Explanation

### What tools did you use?
- **Frontend**: React, Vite, Tailwind CSS, React Router DOM
- **Backend**: Node.js, Express, CORS, Body-parser
- **Version Control**: Git

### How comfortable are you using the chosen stack?
I am very comfortable with this stack. React and Node.js are my daily drivers for full-stack development. Tailwind CSS allows for rapid UI development, and Vite provides an excellent developer experience with fast build times.

### What would you improve with more time?
- **Database**: Replace the in-memory store with a real database like MongoDB or PostgreSQL for data persistence.
- **Testing**: Add unit and integration tests using Jest or Vitest and React Testing Library.
- **Validation**: Implement more robust server-side validation using a library like Joi or Zod.
- **UI/UX**: Add more animations and interactive elements to enhance the user experience.
- **Error Handling**: Implement a centralized error handling mechanism for the backend.
- **Environment Variables**: Use `.env` files to manage configuration and sensitive data.

## Getting Started

### Backend
1. Navigate to the `server` directory: `cd server`
2. Install dependencies: `npm install`
3. Start the server: `node index.js`
   - The server runs on `http://localhost:3000`

### Frontend
1. Navigate to the `client` directory: `cd client`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
   - The application runs on `http://localhost:5173`
