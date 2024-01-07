const express = require("express");
const ExtracurricularController = require("../controllers/extracurricular.controller");

const router = express.Router();

const extracurricularController = new ExtracurricularController();

router.get("/", extracurricularController.fetchAll);

router.get("/:title", extracurricularController.fetchByTitle);

module.exports = router;