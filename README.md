# 🌐 Portfolio API Playground

A **full-stack portfolio project** built with **Node.js, Express, MongoDB, and Vanilla JavaScript**.  
This application provides a backend API for managing profile & project data and a simple frontend to showcase it.

---

## ✨ Features

- **Profile Management** → Add and fetch personal information.
- **Projects Showcase** → Store project details with GitHub & Live links.
- **Search API** → Search projects by title, skills, or tech stack.
- **Frontend UI** → Clean HTML/JS frontend to display profile and projects.
- **Fully Deployed** → Backend on **Render**, Frontend on **Netlify**, Database on **MongoDB Atlas**.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Deployment:** Render (backend), Netlify (frontend)

---

## 📂 Project Structure

backend/
src/
index.js # Express server entry point
config.js # MongoDB connection
models/ # Mongoose schemas
routes/ # API routes
frontend/
index.html # Main UI
script.js # Fetches API data
style.css # Styling

yaml
Copy code

---

## 🚀 Deployment

- **Frontend (Netlify):** [https://your-frontend.netlify.app](https://your-frontend.netlify.app)
- **Backend (Render):** [https://your-backend.onrender.com](https://your-backend.onrender.com)

Example API endpoints:

- `GET /api/profile` → Fetch profile data
- `GET /api/projects` → Fetch all projects
- `POST /api/projects` → Add a new project

---

## ⚡ Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/api-playground.git
   cd api-playground/backend
   Install dependencies:
   ```

bash
Copy code
npm install
Create a .env file in backend/:

env
Copy code
MONGO_URI=your-mongodb-uri
PORT=5000
Start the backend:

bash
Copy code
npm start
Open frontend/index.html in your browser and connect to http://localhost:5000.

📸 Screenshots
Add screenshots of your frontend UI and API responses here.

👤 Author
Aditya Prakash

LinkedIn

GitHub

⭐ Acknowledgments
Express.js

MongoDB Atlas

Netlify

Render

yaml
Copy code
