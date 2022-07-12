import express from "express";
import routes from "./routes/router";

const app = express();
const port = 3000;

//api/images
app.use("/api", routes);

app.get("/", (req: express.Request, res: express.Response) => {
  //    res.send('Hello, world!');
  res
    .status(403)
    .send(
      "Forbidden URL. Well, in a real world service it should not be accesible"
    );
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
