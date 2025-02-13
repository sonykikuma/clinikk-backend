const { mongoose } = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    videoUrl: { type: String, required: true },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const VideoModel = mongoose.model("VideoModel", VideoSchema);
module.exports = { VideoModel };
