const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mern-project-lba", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(_ => console.log("Connected to MongoDb"))
  .catch(err => console.log(`Failed to connect to MongoDb: ${err}`));
