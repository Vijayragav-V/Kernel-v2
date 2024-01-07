const express = require("express");
const ecRoute = require("./extracurricular.routes");

const router = express.Router();

router.use("/extracurriculars", ecRoute);

router.use((req, res) => {
  res.status(404).send({ message: "Not Found" });
});

module.exports = router;