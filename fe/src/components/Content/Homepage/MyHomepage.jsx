import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchPhotos } from "../../Axios/Axios";
import "./MyHomepage.css";


const MyHomepage = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);

  useEffect(() => {
    async function getRandomPhotos() {
      const photosData = await fetchPhotos();
      if (photosData && photosData.length > 0) {
        const shuffledPhotos = photosData.sort(() => 0.5 - Math.random());
        setRandomPhotos(shuffledPhotos.slice(0, 3));
      }
    }

    getRandomPhotos();
  }, []);

  return (
    <div className="Home" style={{ width: "90%", margin: "0 auto" }}>
      <header>
        <p className="h1">Thirdiograpy</p>
        <p className="Ethical">Ethical amateur photographer</p>
        <h2 className="portfolio">Portfolio</h2>
        <p id="Biograpy">
          Questa è una piccola anteprima del Portfolio, dagli uno sguardo,e se
          vuoi, lascia un commento.<br></br>
          Qui verranno caricate foto settimanalmente, in base ai lavori che
          porterò avanti.
        </p>
        <Row xs={1} md={2} lg={3} className="justify-content-center">
          {randomPhotos.map((photo) => (
            <Col key={photo._id} className="d-flex align-items-stretch">
              <Card className="w-100" style={{ margin: "1rem" }}>
                <Card.Img variant="top" src={photo.url} alt={photo.title} />
              </Card>
            </Col>
          ))}
        </Row>
        <Link to="/Portfolio">
          <Button className="BiograpyButton" variant="primary">
            VIEW FULL PORTFOLIO
          </Button>
        </Link>
      </header>
      <main>
        <h2 className="portfolio">BIOGRAPHY</h2>
        <p id="Biograpy">
          Sono nato a Belluno nel 1992 e, dal 2021, mi dedico alla fotografia
          etica come fotografo ritrattista amatoriale. La mia arte è guidata dal
          desiderio di rappresentare le persone con integrità e rispetto,
          cercando di catturare non solo le loro immagini, ma anche le storie e
          le emozioni che esse...
        </p>

        <Link to="/biography">
          <Button className="BiograpyButton" variant="primary">
            VIEW FULL BIOGRAPHY
          </Button>
        </Link>
      </main>
      <main className="EthicalPH">
        <h2 className="portfolio">Etichal Photography</h2>

        <p id="Biograpy">
          “L’etica è conoscere la differenza tra ciò che hai il diritto di fare
          e ciò che è giusto fare.” - Potter Stewart
        </p>

        <p id="Biograpy">
          La fotografia etica è un argomento che mi sta particolarmente a cuore.
          In quanto fotografo, credo fermamente che sia mia responsabilità
          catturare immagini in modo rispettoso e consapevole, sempre attento
          all’impatto che le mie foto possono avere sulle persone e
          sull’ambiente. In primo luogo, la fotografia etica riguarda il
          rispetto dei....
        </p>

        <Link to="/Ethical">
          <Button className="BiograpyButton" variant="primary">
            About Ethical Photography
          </Button>
        </Link>
      </main>
    </div>
  );
};

export default MyHomepage;
