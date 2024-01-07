const express = require("express");
const EcController = require("../controllers/extracurricular.controller");

const router = express.Router();

const ecController = new EcController();

router.get("/", ecController.fetchAll);

router.get("/:title", ecController.fetchByTitle);

module.exports = router;
