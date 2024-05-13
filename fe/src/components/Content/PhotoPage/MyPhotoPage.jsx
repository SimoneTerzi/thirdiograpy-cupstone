import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPhotoById } from "../../Axios/Axios";

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
            <h2>{photo.title}</h2>
          </div>
          <div className="col-md-6">
            <img src={photo.url} alt={photo.title} style={{ width: "100%" }} />
          </div>
          <div className="col-md-6">
            <p>{photo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPhotoPage;
