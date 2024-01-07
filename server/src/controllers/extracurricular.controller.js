const Extracurricular = require("../models/extracurricular.model");

const handleServerError = (res, error) => {
  console.error(error);
  return res.status(500).send({ message: "Server Error" });
};

class ExtracurricularController {
  // Use standard function syntax to avoid issues with class properties
  async fetchAll(req, res) {
    try {
      const extracurriculars = await Extracurricular.find();
      return res.status(200).send(extracurriculars);
    } catch (error) {
      // Call handleServerError with the correct res object
      handleServerError(res, error);
    }
  }

  async fetchByTitle(req, res) {
    const { title } = req.params;

    try {
      const extracurricular = await Extracurricular.findOne({
        title: title,
      });

      if (!extracurricular) {
        return res.status(404).send({
          message: "404 - The requested extracurricular was not found",
        });
      }

      return res.status(200).send(extracurricular);
    } catch (error) {
      // Call handleServerError with the correct res object
      handleServerError(res, error);
    }
  }
}

module.exports = ExtracurricularController;
