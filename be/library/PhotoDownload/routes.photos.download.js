const express = require("express");
const router = express.Router();
const PhotosdownloadModel = require("./model.photo.download");

// RECUPERA TUTTE LE FOTO

router.get("/getPhotosDownload", async (request, response) => {
  try {
    const photos = await PhotosdownloadModel.find();
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
router.get("/getPhotoDownload/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const photo = await PhotosdownloadModel.findById(id);
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

// CREA FOTO
router.post("/createPhotoDownload", async (request, response) => {
  const { title, description, url,} = request.body;

  if (!title || !description || !url) {
    return response.status(400).send({
      statusCode: 400,
      message: "Missing fields in request body",
    });
  }

  const newPhoto = new PhotosdownloadModel({
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

// MODIFICA FOTO
router.patch("/updatePhotoDownload/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const updateData = request.body;
    const options = { new: true };

    const result = await PhotosdownloadModel.findByIdAndUpdate(id, updateData, options);
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
router.delete("/deletePhotoDownload/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const photo = await PhotosdownloadModel.findByIdAndDelete(id);
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

module.exports = router;
