import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./MyBiography.css";
import Homepage from "../../../pages/HomePage";

const MyBiography = () => {
  return (
    <main className="BioMain">
      <h2 className="BioTitle">About me</h2>

      <p id="BioDescription">
        Sono nato a Belluno nel 1992 e, dal 2021, mi dedico alla fotografia
        etica come fotografo ritrattista amatoriale. La mia arte è guidata dal
        desiderio di rappresentare le persone con integrità e rispetto, cercando
        di catturare non solo le loro immagini, ma anche le storie e le emozioni
        che esse racchiudono. La fotografia per me è un mezzo potente per
        esplorare e condividere la complessità dell’esperienza umana. Ogni
        ritratto che scatto è un atto di scoperta, un’opportunità per
        connettersi con l’altro e per raccontare una storia attraverso uno
        sguardo, un gesto, un’espressione. Nel mio lavoro, pongo grande enfasi
        sull’etica, assicurandomi che ogni foto sia il risultato di un incontro
        autentico. Aspiro a creare immagini che non solo rispecchino la
        personalità del soggetto, ma che lo aiutino a sentirsi a proprio agio
        con se stesso. Il mio obiettivo è quello di realizzare una fotografia
        eticamente accettata dal soggetto, che possa ispirare riflessione e
        dialogo
      </p>

      <Link to="/#home">
        {" "}
        {Homepage}
        <Button className="BioButton" variant="primary">
          Return to Homepage
        </Button>
      </Link>
    </main>
  );
};

export default MyBiography;
