import React from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

const cloud_name = "Thirdiograpy"; 
const api_key = "813341364882297";
const api_secret = "TcQBLp2FxaclhwHK9vhzP4cWPHE"; 
const secure = true;

const CloudinaryComponent = () => {
  // Crea un'istanza di Cloudinary e imposta il tuo nome cloud.
  const cld = new Cloudinary({ cloud: { cloudName: cloud_name } });

  // Crea un oggetto CloudinaryImage per l'immagine con il "Public ID" specificato.
  const myImage = cld.image('docs/models'); // Sostituisci con il public ID dell'immagine desiderata

  // Mostra l'immagine in un componente React.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

export default CloudinaryComponent;