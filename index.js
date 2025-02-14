const express = require("express");
const dotenv = require("dotenv");
const { initializeDatabase } = require("./db.connect");
const multer = require("multer");
const cloudinary = require("cloudinary");
const bodyParser = require("body-parser");
const cors = require("cors");
const { VideoModel } = require("./models/videos");
const fs = require("fs");

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

initializeDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//const file = "./videos/small.mp4";for initial testing into cloudinary
async function run() {
  try {
    const result = await new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload_large(
        //files above 6mb needs upload_large
        file,
        {
          resource_type: "video",
        },
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
    console.log(`> Result:${result.secure_url}`);
  } catch (error) {
    console.log(error);
  }
}
//run();

//multer
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // here 100MB file limit
});

app.get("/", (req, res) => {
  res.send("Hello videos!");
});

//api for posting a new video to cloudinary and db
app.post("/uploadVideo", upload.single("video"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const { title, description } = req.body;

    cloudinary.v2.uploader
      .upload_stream({ resource_type: "video" }, async (error, result) => {
        if (error)
          return res
            .status(500)
            .json({ error: "Upload failed", details: error.message });

        const newVideo = new VideoModel({
          title,
          videoUrl: result.secure_url,
          description,
        });

        await newVideo.save();
        res.status(201).json({
          message: "Video uploaded successfully",
          video: newVideo,
        });
      })
      .end(req.file.buffer); // here sending buffer directly
  } catch (error) {
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
});

//api to fetch all the videos saved in db
app.get("/videos", async (req, res) => {
  try {
    const videos = await VideoModel.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
