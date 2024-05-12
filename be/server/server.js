// Importa le dipendenze
const mongoose = require("mongoose");

// Importa il router per il portafoglio fotografico
const photoPortfolioRoutes = require("./library/PhotoPortfolio/routes.photos.portfolio");

// Schema e modello per il portafoglio fotografico
const PortfolioPhotoSchema = new mongoose.Schema({
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
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }],
}, { timestamps: true });

const PortfolioPhotoModel = mongoose.model("PortfolioPhoto", PortfolioPhotoSchema);

// Percorso API per il portafoglio fotografico
app.use("/api/photo-portfolio", photoPortfolioRoutes); // Monta photoPortfolioRoutes all'endpoint /api/photo-portfolio
