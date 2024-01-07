const Extracurricular = require("../models/extracurricular.model");

const errorMessage = (res, error) => {
    console.error(error);
    return res.status(500).send({ message: "Server Error" });
};

class ExtracurricularController {
    fetchAll = async (req, res) => {
        try {
            const query = req.query;
            const extracurriculars = await Extracurricular.find(query);

            return res.status(200).send(extracurriculars);
        } catch (error) {
            handleServerError(res, error);
        }
    };

    fetchByTitle = async (req, res) => {
        const { ecTitle } = req.params;

        try {
            const ec = await Extracurricular.findOne({ title: ecTitle });

            if (!ec) {
                return res.status(404).send({ message: "There are no opportunities by this title. Try again, using a different name or browse our opportunities!" });
            }

            return res.status(200).send(ec);
        } catch (error) {
            handleServerError(res, error);
        }
    };

}

module.exports = ExtracurricularController;