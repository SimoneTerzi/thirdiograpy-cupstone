import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { fetchPhotos } from '../Axios/Axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'; 

function PhotoPortfolioCard() {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    async function fetchData() {
      const photosData = await fetchPhotos();
      if (photosData && photosData.length > 0) {
        setPhotos(photosData);
      }
    }

    fetchData();
  }, []);

  const handleCardClick = (photoId) => {
    
    navigate(`/photo-page/${photoId}`);
  };

  if (!photos.length) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 justify-content-center">
        {photos.map((photo) => (
          <Col key={photo._id} className="d-flex align-items-stretch">
            <Card
              className="w-100"
              style={{ margin: '1rem', cursor: 'pointer' }}
              onClick={() => handleCardClick(photo._id)}
            >
              <Card.Img
                variant="top"
                src={photo.url}
                style={{ objectFit: 'cover', height: '250px' }} 
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PhotoPortfolioCard;
