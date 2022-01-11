const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const localisationRout = require("./router/localisationRouter.js");


const PORT = process.env.PORT || 3636;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);


app.use("/todo", localisationRout);


app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
