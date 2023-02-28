const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./routes/user_routes.js")

const app = express();

//Toma el puerto 8080 o el puerto del servicio que consumimos
const port = process.env.PORT || 9000;

//middleware
//json es para pasar de json a objeto
app.use(express.json())

app.use('/api', router)


//mongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MONGODB Atlas"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Server On");
});
