const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Importa il modulo CORS

require("dotenv").config();

const WEB_SERVICES = process.env.WEB_SERVICES; // Modifica la porta per utilizzare il servizio web
const app = express();

const photosPortfolioRoute = require("./library/PhotoPortfolio/routes.photos.porfolio");

app.use(express.json());
app.use(cors()); // Usa il middleware CORS

app.use("/api/photo-portfolio", photosPortfolioRoute);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database successfully connected"))
  .catch((error) => console.error("Db connection error!", error));

app.listen(WEB_SERVICES, () => {
  console.log(`Server connected and listening on port ${WEB_SERVICES}`);
});
