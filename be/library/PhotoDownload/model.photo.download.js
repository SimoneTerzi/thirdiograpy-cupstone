const mongoose = require("mongoose");

const PhotoDownloadSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 255,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    collection: "photosdownload",
  }
);

module.exports = mongoose.model("PhotosdownloadModel", PhotoDownloadSchema);
