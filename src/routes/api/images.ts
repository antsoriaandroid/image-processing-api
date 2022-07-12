import express from "express";
import imageUtilities from "../../utils/imageUtilities";

const images = express.Router();
images.get("/", (req: express.Request, res: express.Response): void => {
  //parameters:
  //-filename
  //-width
  //-height
  const isValid: boolean = imageUtilities.areParametersValid(req);

  if (!isValid) {
    res.status(400).send("Wrong parameters value");
  } else {
    console.log("All the parameters are valid");
    let filename: string = req.query.filename as string;
    let height = req.query.height;
    let width = req.query.width;

    if(!imageUtilities.existsImage(filename)){

      res.status(400).send("Image doesn't exists");
    } else {
      console.log("Image server");
      res.send("Images route");
    }
  }
});

export default images;
