# 🎥 Video Upload Backend (Node.js + Express + Cloudinary + MongoDB)

This is a **backend service** for uploading videos to **Cloudinary** and storing data in **MongoDB**.  
It also provides APIs to fetch the uploaded videos.

---

## 🚀 **Features**
- Upload videos to **Cloudinary**
- Store video metadata (title, description, URL) in **MongoDB**
- Fetch all uploaded videos via API
- Uses **Multer** for handling file uploads
- CORS enabled for frontend communication

---

## 🛠 **Tech Stack**
- **Node.js** (Backend Framework)
- **Express.js** (API Handling)
- **MongoDB + Mongoose** (Database)
- **Cloudinary** (Video Hosting)
- **Multer** (File Upload Middleware)
- **Cors** (Cross-Origin Requests)
- **Dotenv** (Environment Variables Management)

---

## 📌 **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- [Cloudinary Account](https://cloudinary.com/) (For video uploads)

---

## 🛠 **Setup Instructions**

### 🔹 **1. Clone the Repository**
```sh
git clone https://github.com/sonykikuma/clinikk-backend.git
cd clinikk-backend
npm install
