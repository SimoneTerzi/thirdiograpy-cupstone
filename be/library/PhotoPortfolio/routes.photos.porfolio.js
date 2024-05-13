

const express = require("express");
const router = express.Router();
const Photosporfoliomodel = require("./models.photo.portfolio");

// RECUPERA TUTTE LE FOTO
router.get("/getPhotosPortfolio", async (request, response) => {
  try {
    const photos = await Photosporfoliomodel.find();
    response.status(200).send(photos);
  } catch (e) {
    console.error(e);
    response.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error: e.message,
    });
  }
});

// RECUPERA FOTO PER ID
router.get("/getPhotoPortfolioById/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const photo = await Photosporfoliomodel.findById(id);
    if (!photo) {
      return response.status(404).send({
        statusCode: 404,
        message: "The requested photo does not exist!!",
      });
    }

    response.status(200).send(photo);
  } catch (e) {
    console.error(e);
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      error: e.message,
    });
  }
});

// RECUPERA FOTO PER TITOLO
router.get("/getPhotoPortfolioByTitle/:title", async (request, response) => {
  const { title } = request.params;

  try {
    const photo = await Photosporfoliomodel.findOne({ title });
    if (!photo) {
      return response.status(404).send({
        statusCode: 404,
        message: "The requested photo does not exist!",
      });
    }

    response.status(200).send(photo);
  } catch (e) {
    console.error(e);
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      error: e.message,
    });
  }
});

// CREA FOTO
router.post("/createPhotoPortfolio", async (request, response) => {
  const { title, description, url } = request.body;

  if (!title || !description || !url) {
    return response.status(400).send({
      statusCode: 400,
      message: "Missing fields in request body",
    });
  }

  const newPhoto = new Photosporfoliomodel({
    title,
    description,
    url,
  });

  try {
    const photoToSave = await newPhoto.save();
    response.status(201).send({
      statusCode: 201,
      payload: photoToSave,
    });
  } catch (e) {
    console.error(e);
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      error: e.message,
    });
  }
});

// CREA FOTO CON COMMENTO E VOTO

router.post("/createPhotoPortfolio", async (request, response) => {
  const { title, description, url, commentText, rating } = request.body;

  if (!title || !description || !url || !commentText || !rating) {
    return response.status(400).send({
      statusCode: 400,
      message: "Missing fields in request body",
    });
  }

  const newPhoto = new Photosporfoliomodel({
    title,
    description,
    url,
    comments: [{ text: commentText, rating }],
  });

  try {
    const photoToSave = await newPhoto.save();
    response.status(201).send({
      statusCode: 201,
      payload: photoToSave,
    });
  } catch (e) {
    console.error(e);
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      error: e.message,
    });
  }
});

// AGGIUNGI COMMENTO E VOTO AD UNA FOTO

router.post("/addComment/:id", async (request, response) => {
  const { id } = request.params;
  const { text, rating } = request.body;

  if (!text || !rating) {
    return response.status(400).send({
      statusCode: 400,
      message: "Missing fields in request body",
    });
  }

  try {
    const photo = await Photosporfoliomodel.findById(id);
    if (!photo) {
      return response.status(404).send({
        statusCode: 404,
        message: "The requested photo does not exist!!",
      });
    }

    photo.comments.push({ text, rating });
    await photo.save();

    response.status(200).send({
      statusCode: 200,
      message: "Comment added successfully",
    });
  } catch (e) {
    console.error(e);
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      error: e.message,
    });
  }
});

// ELIMINA COMMENTO

router.delete(
  "/deleteComment/:photoId/:commentId",
  async (request, response) => {
    const { photoId, commentId } = request.params;
    try {
      const photo = await Photosporfoliomodel.findById(photoId);
      if (!photo) {
        return response.status(404).send({
          statusCode: 404,
          message: "The requested photo does not exist!!",
        });
      }
      const commentIndex = photo.comments.findIndex(
        (comment) => comment._id.toString() === commentId
      );
      if (commentIndex === -1) {
        return response.status(404).send({
          statusCode: 404,
          message: "The requested comment does not exist!!",
        });
      }
      photo.comments.splice(commentIndex, 1);
      await photo.save();
      response
        .status(200)
        .send(
          `Comment with id ${commentId} successfully removed from photo with id ${photoId}`
        );
    } catch (e) {
      console.error(e);
      response.status(500).send({
        statusCode: 500,
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }
);

// MODIFICA FOTO

router.patch("/updatePhotoPortfolio/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const updateData = request.body;
    const options = { new: true };

    const result = await Photosporfoliomodel.findByIdAndUpdate(
      id,
      updateData,
      options
    );
    if (!result) {
      return response.status(404).send({
        statusCode: 404,
        message: "Photo not found",
      });
    }
    response.status(200).send({
      statusCode: 200,
      payload: result,
    });
  } catch (e) {
    console.error(e);
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      error: e.message,
    });
  }
});

// DELETE

router.delete("/deletePhotoPortfolio/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const photo = await Photosporfoliomodel.findByIdAndDelete(id);
    if (!photo) {
      return response.status(404).send({
        statusCode: 404,
        message: "The requested photo does not exist!!",
      });
    }
    response.status(200).send(`Photo with ${id} successfully removed`);
  } catch (e) {
    console.error(e);
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      error: e.message,
    });
  }
});

//Recupara i comment e i rating tramide ID

router.get("/getPhotoPortfolioComments/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const photo = await Photosporfoliomodel.findById(id);
    if (!photo) {
      return response.status(404).send({
        statusCode: 404,
        message: "The requested photo does not exist!!",
      });
    }

    const comments = photo.comments.map(comment => ({
      text: comment.text,
      rating: comment.rating
    }));

    response.status(200).send(comments);
  } catch (e) {
    console.error(e);
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      error: e.message,
    });
  }
});


module.exports = router;

