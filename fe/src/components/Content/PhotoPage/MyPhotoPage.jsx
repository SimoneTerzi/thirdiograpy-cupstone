import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPhotoById } from "../../Axios/Axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./MyPhotoPage.css";

const MyPhotoPage = () => {
  let { photoId } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const photoData = await getPhotoById(photoId);
        setPhoto(photoData);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    fetchPhoto();
  }, [photoId]);

  return (
    <div className="container text-center">
      {photo && (
        <div className="row">
          <div className="col-md-12">
            <h5 className="PhotoTitle">{photo.title}</h5>
          </div>
          <div className="col-md-6">
            <img src={photo.url} alt={photo.title} style={{ width: "100%" }} />
          </div>
          <div className="col-md-6">
            <p className="PhotoDescription">{photo.description}</p>
          </div>
        </div>
      )}

      <Link to="/Portfolio">
        <Button className="MyPhotoButton" variant="primary">
          Return to Portfolio
        </Button>
      </Link>
    </div>
  );
};

export default MyPhotoPage;
