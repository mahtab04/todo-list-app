const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const Task = require("./models/task");

//set up the view engine

app.set("view engine", "ejs");
app.set("views", "./views");

//body parser
app.use(express.urlencoded());

app.use(express.static("./assets"));

//use express router
app.use("/", require("./routes"));

//listen

app.listen(port, (err) => {
  if (err) {
    console.log("error", err);
  }
  console.log(`Server is listening on port ${port}`);
});
