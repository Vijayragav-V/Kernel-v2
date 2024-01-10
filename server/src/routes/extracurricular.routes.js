const express = require("express");
const ExtracurricularController = require("../controllers/extracurricular.controller");

const router = express.Router();

const extracurricularController = new ExtracurricularController();

router.get("/", extracurricularController.fetchAll);

router.get("/extracurricular/:title", extracurricularController.fetchByTitle);

router.get("/count", extracurricularController.getCount);

module.exports = router;
