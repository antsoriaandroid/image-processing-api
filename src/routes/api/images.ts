import express from "express";
import imageUtilities from "../../utils/imageUtilities";
import fs from "fs";

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
    let height: number  = parseInt(req.query.height as string);
    let width: number= parseInt(req.query.width as string) ;

    if(!imageUtilities.existsImage(filename)){

      res.status(400).send("Image doesn't exists");
    } else {
      if(!imageUtilities.existsThumbnail(filename , width, height)){
        imageUtilities.resizeImage(filename , width, height);
      }

      //let imageStream = imageUtilities.getStream(filename , width, height));

      console.log("Image server");
      //res.sendFile('./images/thumbnails/'+filename+'-h'+height +'-w'+width +'.jpg');
      fs.createReadStream('./images/thumbnails/'+filename+'-h'+height +'-w'+width +'.jpg').pipe(res);
      res.set({'Content-Type': 'image/jpeg'});
      res.status(200);
    }
  }
});

export default images;
