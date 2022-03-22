const express = require("express");

const { petController } = require("../controllers");

const router = express.Router();

router.post("/pets", petController.postPet);
router.get("/pets", petController.getPets);
router.get("/pets/:id", petController.getPetById);
router.delete("/pets/:id", petController.deletePetById);

module.exports = router;
