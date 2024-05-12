import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./MyEthicalPage.css";
import Homepage from "../../../pages/HomePage";

const MyEthicalPage = () => {
  return (
    <main className="EthicalMain">
      <h2 className="EthicalTitle">Ethical Photography</h2>

      <p id="EthicalDescription">
        La fotografia etica è un argomento che mi sta particolarmente a cuore.
        In quanto fotografo, credo fermamente che sia mia responsabilità
        catturare immagini in modo rispettoso e consapevole, sempre attento
        all’impatto che le mie foto possono avere sulle persone e sull’ambiente.
        In primo luogo, la fotografia etica riguarda il rispetto dei soggetti.
        Quando fotografo persone, mi assicuro di ottenere il loro consenso
        informato, specialmente in situazioni vulnerabili o delicate. È
        importante per me che si sentano a proprio agio e che comprendano come
        intendo utilizzare le immagini. Questo rispetto si estende anche alla
        rappresentazione dei soggetti: evito di perpetuare stereotipi o di
        presentare le persone in una luce che potrebbe essere dannosa o
        fuorviante. Un altro aspetto fondamentale è la considerazione
        dell’ambiente. Durante le mie sessioni fotografiche, faccio attenzione a
        non disturbare la natura, a non danneggiare gli habitat e a lasciare
        ogni luogo esattamente come l’ho trovato. Credo che come fotografi
        abbiamo il dovere di promuovere la conservazione attraverso le nostre
        opere, mostrando la bellezza e la fragilità del nostro pianeta. La
        fotografia etica implica anche l’integrità nel processo di editing.
        Mentre è comune praticare una certa quantità di post-produzione, mi
        impegno a non alterare le immagini in modo tale da distorcere la realtà
        o ingannare lo spettatore. La veridicità dell’immagine è cruciale,
        soprattutto in ambiti come il fotogiornalismo, dove l’autenticità è
        essenziale. Inoltre, sono consapevole dell’importanza della privacy e
        dei diritti d’autore. Rispetto la proprietà intellettuale altrui e sono
        attento a non utilizzare immagini senza il dovuto permesso. Allo stesso
        modo, proteggo i diritti sulle mie fotografie, assicurandomi che siano
        utilizzate in modo appropriato e con il mio consenso. Infine, la
        fotografia etica si estende alla condivisione e alla pubblicazione delle
        immagini. Prima di diffondere una foto, rifletto attentamente
        sull’impatto che potrebbe avere. Mi chiedo: “Questa immagine potrebbe
        danneggiare qualcuno? Contribuisce a un discorso costruttivo?
        Rappresenta i soggetti con dignità?” Solo dopo aver risposto a queste
        domande, decido se pubblicare o meno. In conclusione, la fotografia
        etica non è solo una serie di regole da seguire, ma un approccio
        consapevole e rispettoso verso la fotografia. È un impegno costante a
        riflettere sulle proprie azioni e sull’impatto che esse hanno sul mondo.
        Come fotografo, mi sforzo di aderire a questi principi, nella speranza
        di contribuire positivamente alla società e di ispirare altri a fare lo
        stesso. La fotografia è un potente strumento di comunicazione e deve
        essere utilizzata con saggezza e responsabilità.
      </p>

      <Link to="/#home">
        {" "}
        {Homepage}
        <Button className="EthicalButton" variant="primary">
          Return to Homepage
        </Button>
      </Link>
    </main>
  );
};

export default MyEthicalPage;
