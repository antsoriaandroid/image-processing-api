import express from "express";
import routes from "./routes/router";

const app = express();
const port = 3000;

//api/images
app.use("/api", routes);

app.get("/", (req, res) => {
  //    res.send('Hello, world!');
  res.status(403).send("Forbidden URL");
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
