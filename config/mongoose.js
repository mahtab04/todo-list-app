//require the library
const mongoose = require("mongoose");

const url = `mongodb+srv://todo_list:Gu0LpL0Mqi02qvRu@todo.ey7jr.mongodb.net/todo?retryWrites=true&w=majority`;

//connect to the database
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// acquire the connection (to check if it successful)
const db = mongoose.connection;

//export the connection
module.exports = db;
