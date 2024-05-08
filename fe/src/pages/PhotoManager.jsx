import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PhotoManager() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [editedPhoto, setEditedPhoto] = useState({});
  const [newPhoto, setNewPhoto] = useState({ title: '', description: '', url: '' });
  const [editedComment, setEditedComment] = useState({ text: '', rating: 1 });

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('/getPhotosPortfolio');
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setEditedPhoto({ ...photo });
  };

  const handlePhotoUpdate = async () => {
    try {
      await axios.patch(`/updatePhotoPortfolio/${selectedPhoto._id}`, editedPhoto);
      fetchPhotos();
    } catch (error) {
      console.error('Error updating photo:', error);
    }
  };

  const handleCommentUpdate = async (commentId) => {
    try {
      await axios.post(`/addComment/${selectedPhoto._id}`, editedComment);
      fetchPhotos();
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const handlePhotoDelete = async (photoId) => {
    try {
      await axios.delete(`/deletePhotoPortfolio/${photoId}`);
      fetchPhotos();
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      await axios.delete(`/deleteComment/${selectedPhoto._id}/${commentId}`);
      fetchPhotos();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleNewPhotoSubmit = async () => {
    try {
      await axios.post('/createPhotoPortfolio', newPhoto);
      fetchPhotos();
    } catch (error) {
      console.error('Error creating new photo:', error);
    }
  };

  return (
    <div>
      <h1>Photo Manager</h1>
      <div>
        {photos.map(photo => (
          <div key={photo._id}>
            <img src={photo.url} alt={photo.title} onClick={() => handlePhotoClick(photo)} />
            <button onClick={() => handlePhotoDelete(photo._id)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        {selectedPhoto && (
          <div>
            <h2>Edit Photo</h2>
            <input
              type="text"
              value={editedPhoto.title}
              onChange={(e) => setEditedPhoto({ ...editedPhoto, title: e.target.value })}
            />
            <input
              type="text"
              value={editedPhoto.description}
              onChange={(e) => setEditedPhoto({ ...editedPhoto, description: e.target.value })}
            />
            <input
              type="text"
              value={editedPhoto.url}
              onChange={(e) => setEditedPhoto({ ...editedPhoto, url: e.target.value })}
            />
            <button onClick={handlePhotoUpdate}>Save Changes</button>
          </div>
        )}
      </div>
      <div>
        {selectedPhoto && (
          <div>
            <h2>Edit Comments</h2>
            {selectedPhoto.comments.map(comment => (
              <div key={comment._id}>
                <input
                  type="text"
                  value={editedComment.text}
                  onChange={(e) => setEditedComment({ ...editedComment, text: e.target.value })}
                />
                <select
                  value={editedComment.rating}
                  onChange={(e) => setEditedComment({ ...editedComment, rating: e.target.value })}
                >
                  {[1, 2, 3, 4, 5].map(rating => (
                    <option key={rating} value={rating}>{rating}</option>
                  ))}
                </select>
                <button onClick={() => handleCommentUpdate(comment._id)}>Save Changes</button>
                <button onClick={() => handleCommentDelete(comment._id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <h2>Add New Photo</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPhoto.title}
          onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newPhoto.description}
          onChange={(e) => setNewPhoto({ ...newPhoto, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL"
          value={newPhoto.url}
          onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
        />
        <button onClick={handleNewPhotoSubmit}>Add Photo</button>
      </div>
    </div>
  );
}

export default PhotoManager;
