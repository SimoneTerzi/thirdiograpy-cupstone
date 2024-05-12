import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPhotoById } from '../../Axios/Axios';

function MyPhotoPage() {
  const [photo, setPhoto] = useState(null);
  const { photoId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const photoData = await getPhotoById(photoId); // Usa la funzione corretta
      if (photoData) {
        setPhoto(photoData);
      }
    }

    fetchData();
  }, [photoId]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} />s
      <p>{photo.description}</p>
    </div>
  );
}

export default MyPhotoPage;
