const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productsRoutes");
require("dotenv").config({ path: ".env" });
const cors = require("cors");
require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Port d'écoute: ${process.env.PORT}`);
});
