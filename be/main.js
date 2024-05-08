// Importa le dipendenze
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Imposta la porta
const PORT = process.env.PORT || 3030;
const app = express();

// Importa i router
const photosPortfolioRoute = require("../be/library/PhotoPortfolio/routes.photos.porfolio");
const photosDownloadRoute = require("../be/library/PhotoDownload/routes.photos.download");

// Usa il middleware per il parsing del corpo delle richieste JSON
app.use(express.json());

// Monta i router
app.use("/", photosPortfolioRoute); // Monta photosPortfolioRoute all'endpoint /
app.use("/", photosDownloadRoute); // Monta photosDownloadRoute all'endpoint /

// Connessione al database MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database successfully connected"))
  .catch((error) => console.error("Db connection error!", error));

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server connected and listening on port ${PORT}`);
});
