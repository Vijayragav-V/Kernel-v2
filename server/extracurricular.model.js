const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const extracurricularSchema = new mongoose.Schema({
    _id: { type: objectId, auto: true },
    title: {
        type: String,
    },
    link: {
        type: String,
    },
    description: {
        type: String,
    },   
    tags: {
        type: [String],
        required: true,
    },
    location: {
        type: String,
    },
    schedule: [
        {
            day:{
                type:String,
            },
            time:{
                type: String,
            }, 
        }
    ],
    contact: [
        {
            name: {
                type: String
            },
            email: {
                type: String,
            },
            phone: {
                type: String
            },
        }
    ], 
    date_created: {
        type: Date,
        default: Date.now,
    },
    date_updated: {
        type: Date,
        default: null,
    },   
});
  
const Extracurricular = mongoose.model("Extracurricular", extracurricularSchema);
module.exports = Extracurricular;  