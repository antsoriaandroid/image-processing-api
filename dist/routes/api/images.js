"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageUtilities_1 = __importDefault(require("../../utils/imageUtilities"));
var images = express_1.default.Router();
images.get("/", function (req, res) {
    //parameters:
    //-filename
    //-width
    //-height
    var isValid = imageUtilities_1.default.areParametersValid(req);
    if (!isValid) {
        res.status(400).send("Wrong parameters value");
    }
    else {
        console.log("All the parameters are valid");
        var filename = req.query.filename;
        var height = req.query.height;
        var width = req.query.width;
        if (!imageUtilities_1.default.existsImage(filename)) {
            res.status(400).send("Image doesn't exists");
        }
        else {
            console.log("Image server");
            res.send("Images route");
        }
    }
});
exports.default = images;
