import express from "express";
import imageUtilities from "../../utils/imageUtilities";

const images = express.Router();
images.get("/", (req, res) => {
  //parameters:
  //-filename
  //-width
  //-height
  let isValid:boolean  = imageUtilities.areParametersValid(req);

  if(!isValid){
    res.status(400).send("Wrong parameters value");
  } else {
  res.send("Images route");
  }
});

export default images;
