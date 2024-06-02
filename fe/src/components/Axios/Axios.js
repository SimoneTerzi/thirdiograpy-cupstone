import axios from "axios";

// Configurazione dell'istanza di axios
const axiosInstance = axios.create({
  baseURL: process.env.WEB_SERVICES,
});

// Funzioni per il portfolio fotografico
async function fetchPhotos() {
  try {
    const response = await axiosInstance.get("/api/photo-portfolio/getPhotosPortfolio");
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}

async function updatePhoto(photoId, updatedData) {
  try {
    const response = await axiosInstance.patch(`/api/photo-portfolio/updatePhotoPortfolio/${photoId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating photo:", error);
  }
}

async function addComment(photoId, commentData) {
  try {
    const response = await axiosInstance.post(`/api/photo-portfolio/addComment/${photoId}`, commentData);
    return response.data;
  } catch (error) {
    console.error("Error adding comment:", error);
  }
}

async function deletePhoto(photoId) {
  try {
    const response = await axiosInstance.delete(`/api/photo-portfolio/deletePhotoPortfolio/${photoId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting photo:", error);
  }
}

async function deleteComment(photoId, commentId) {
  try {
    const response = await axiosInstance.delete(`/api/photo-portfolio/deleteComment/${photoId}/${commentId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
}

async function createPhoto(newPhotoData) {
  try {
    const response = await axiosInstance.post("/api/photo-portfolio/createPhotoPortfolio", newPhotoData);
    return response.data;
  } catch (error) {
    console.error("Error creating new photo:", error);
  }
}


async function getPhotoByTitle(title) {
  try {
    const response = await axiosInstance.get(`/api/photo-portfolio/getPhotoPortfolioByTitle/${title}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching photo by title:", error);
  }
}

async function getPhotoByUrl(url) {
  try {
    const response = await axiosInstance.get(`/api/photo-portfolio/getPhotoPortfolioByUrl/${url}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching photo by url:", error);
  }
}

async function getPhotoByDescription(description) {
  try {
    const response = await axiosInstance.get(`/api/photo-portfolio/getPhotoPortfolioByDescription/${description}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching photo by description:", error);
  }
}

async function getPhotoById(photoId) {
  try {
    const response = await axiosInstance.get(`/api/photo-portfolio/getPhotoPortfolioById/${photoId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching photo by id:", error);
    return null;
  }
}

async function getPhotoCommentsById(photoId) {
  try {
    const response = await axiosInstance.get(`/api/photo-portfolio/getPhotoPortfolioComments/${photoId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}

// Export di tutte le funzioni
export {
  getPhotoById,
  fetchPhotos,
  updatePhoto,
  addComment,
  deletePhoto,
  deleteComment,
  createPhoto,
  getPhotoByTitle,
  getPhotoByUrl,
  getPhotoByDescription,
  getPhotoCommentsById
};