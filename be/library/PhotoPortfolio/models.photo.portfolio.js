const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    // Aggiungi altri campi per informazioni aggiuntive sui commenti se necessario
  },
  { timestamps: true }
);

const PhotoPorfolioSchema = new mongoose.Schema(
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
    comments: [CommentSchema], // Aggiungi il campo dei commenti usando lo schema dei commenti definito sopra
  },
  {
    timestamps: true,
    collection: "photosportfolio",
  }
);

module.exports = mongoose.model("Photosporfoliomodel", PhotoPorfolioSchema);

module.exports = mongoose.model("Photosporfoliomodel", PhotoPorfolioSchema);
