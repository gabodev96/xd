const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//contectarse a mongoose

//solicitar ruta

app.listen(3001, function () {
  console.log("Express server is running on port 3001");
});
