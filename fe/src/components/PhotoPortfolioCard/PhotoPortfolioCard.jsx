import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchPhotos } from '../Axios/Axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PhotoPortfolioCard() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const photosData = await fetchPhotos();
      if (photosData && photosData.length > 0) {
        setPhotos(photosData);
      }
    }

    fetchData();
  }, []);

  if (!photos.length) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 justify-content-center">
        {photos.map((photo) => (
          <Col key={photo._id} className="d-flex align-items-stretch">
            <Card className="w-100" style={{ margin: '1rem' }}>
              <Card.Img variant="top" src={photo.url} />
              <Card.Body>
                <Card.Title>{photo.title}</Card.Title>
                <Card.Text>
                  {photo.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PhotoPortfolioCard;
