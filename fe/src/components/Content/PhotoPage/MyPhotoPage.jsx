import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPhotoById, getPhotoCommentsById } from "../../Axios/Axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./MyPhotoPage.css";

const MyPhotoPage = () => {
  let { photoId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const photoData = await getPhotoById(photoId);
        setPhoto(photoData);

        // Ottieni i commenti relativi alla foto corrente
        const commentsData = await getPhotoCommentsById(photoId);
        console.log("Comments data:", commentsData); // Controlla i dati dei commenti
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [photoId]);

  // Funzione per generare le stelle in base al punteggio
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          &#9733; {/* Codice HTML per la stella */}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container text-center">
      {photo && (
        <div className="row">
          <div className="col-md-12">
            <h5 className="PhotoTitle">{photo.title}</h5>
            <p className="PhotoDescription">{photo.description}</p>
          </div>
          <div className="col-md-6">
            <img src={photo.url} alt={photo.title} style={{ width: "100%" }} />
          </div>
          <div className="col-md-6">
            <div style={{ width: "100%" }}>
              <h6 className="CommentTitle">Comments:</h6>
              {comments.map((comment, index) => (
                <div className="CommentsContainer" key={index}>
                  <p>{comment.text}</p>
                  <p>{renderRatingStars(comment.rating)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div>
        <Button className="MyPhotoButton" variant="primary">
          Lascia un pensiero sullo scatto
        </Button>
      </div>

      <Link to="/Portfolio">
        <Button className="MyPhotoButton" variant="primary">
          Return to Portfolio
        </Button>
      </Link>
    </div>
  );
};

export default MyPhotoPage;
