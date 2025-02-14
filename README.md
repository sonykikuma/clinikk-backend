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
npm install(this will install all the dependencies)
Create a .env file in the root directory and add:

# MongoDB Connection
MONGODB=your_mongodb_connection_string

# Cloudinary Credentials
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
After .env file is saved, run the backend by writing command:- node index.js
The server will start running on the port 3000

## To test apis
use postman to test the api's with the given endpoints in the index.js file
use .mp4 file(not HD)strictly to upload
here(max.file size should be less than 100mb), so start testing from small files(as 5mb...) as explained in the cloudinary documents as well.
