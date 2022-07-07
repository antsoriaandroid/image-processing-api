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
        res.send("Images route");
    }
});
exports.default = images;
