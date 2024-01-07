const express = require("express");
const extracurricularRoute = require("./extracurricular.routes");

const router = express.Router();

router.use("/extracurriculars", extracurricularRoute);

router.use((req, res) => {
  res.status(404).send({ message: "Not Found" });
});

module.exports = router;