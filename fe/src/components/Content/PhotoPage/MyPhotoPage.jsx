import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getPhotoById,
  getPhotoCommentsById,
  addComment,
} from "../../Axios/Axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./MyPhotoPage.css";

const MyPhotoPage = () => {
  let { photoId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newComment, setNewComment] = useState({
    text: "",
    rating: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const photoData = await getPhotoById(photoId);
        setPhoto(photoData);

        const commentsData = await getPhotoCommentsById(photoId);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [photoId]);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value,
    });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await addComment(photoId, newComment);
      // Aggiorna i commenti dopo l'aggiunta di un nuovo commento
      const updatedComments = await getPhotoCommentsById(photoId);
      setComments(updatedComments);
      // Chiudi il modale dopo l'invio del commento
      handleModalClose();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const renderRatingStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          {i <= rating ? "★" : "☆"}
        </span>
      );
    }
    return <div>{stars}</div>;
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
                  {renderRatingStars(comment.rating)}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div>
        <Button
          className="MyPhotoButton"
          variant="primary"
          onClick={handleModalShow}
        >
          Lascia un pensiero sullo scatto
        </Button>
      </div>

      <Link to="/Portfolio">
        <Button className="MyPhotoButton" variant="primary">
          Return to Portfolio
        </Button>
      </Link>

      <Modal
        className="CommentModal"
        show={showModal}
        onHide={handleModalClose}
      >
        <Modal.Header style={{ backgroundColor: "#d0cfc4" }} closeButton>
          <Modal.Title className="ModalLascia">Lascia un pensiero</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#d0cfc4" }}>
          <Form onSubmit={handleCommentSubmit}>
            <Form.Group controlId="commentText">
              <Form.Label className="ModalLascia">Comment:</Form.Label>
              <Form.Control
                className="ModalForm"
                type="text"
                placeholder="Enter your comment"
                name="text"
                value={newComment.text}
                onChange={handleCommentChange}
                style={{ backgroundColor: "#d0cfc4" }}
              />
            </Form.Group>
            <Form.Group controlId="commentRating">
              <Form.Label className="ModalLascia">Rating:</Form.Label>
              <Form.Control
                className="ModalLascia"
                as="select"
                name="rating"
                value={newComment.rating}
                onChange={handleCommentChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </Form.Control>
            </Form.Group>
            <Button className="MyPhotoButton" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyPhotoPage;
