# Project Deployment Guide

This guide explains how to deploy your **backend (Express + MongoDB)** on Render and your **frontend (HTML/JS)** on Netlify.

---

## 1. Backend Deployment (Render)

### Step 1: Upload to GitHub

- Push your backend code to GitHub.
- Make sure `.env` file is **not uploaded** (add it to `.gitignore`).

### Step 2: Create a Web Service on Render

1. Go to [https://render.com](https://render.com).
2. Click **New Web Service**.
3. Connect your GitHub repository.
4. Set the root directory to `backend` (or `src` depending on your structure).

### Step 3: Add Environment Variables

In Render settings, add:  
MONGO_URI=your-mongodb-atlas-uri
PORT=10000

markdown
Copy code

### Step 4: Deploy

- Click **Deploy**.
- After deployment, you will get a backend URL, for example:  
  https://myapi.onrender.com

yaml
Copy code

---

## 2. Frontend Deployment (Netlify)

### Step 1: Update API Base URL

In `frontend/script.js`, replace the base URL:

```js
const API_BASE = "https://myapi.onrender.com/api";
Step 2: Deploy to Netlify
Go to https://netlify.com.

Click Add New Site → Deploy manually.

Upload the frontend folder.

After deployment, you will get a Netlify URL, for example:

arduino
Copy code
https://myportfolio.netlify.app
3. Testing
Open your Netlify URL → you should see the frontend.

The frontend will call the backend API hosted on Render.

Example API routes:

https://myapi.onrender.com/api/profile

https://myapi.onrender.com/api/projects

4. Notes
Free Tiers:

Render → Free web service (sleeps after 15 min idle, ~30 sec cold start).

Netlify → Free unlimited static hosting.

MongoDB Atlas → Free cluster (512 MB storage).

Never push your .env file to GitHub.

If you later move to React/Next.js, update Netlify build settings accordingly.
```
