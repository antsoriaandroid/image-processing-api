import express from "express";
import images from "./api/images";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response): void => {
  //res.send("Main API route");
  res
    .status(403)
    .send(
      "Forbidden URL. Well it is really the Main API Route but it should not be accesible in a real world service"
    );
});

router.use("/images", images);

export default router;
