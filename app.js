
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const taskRoutes = require("./routes/tasks");
const groupRoutes = require("./routes/groups");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use("/api/groups", groupRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Conectado a MongoDB");
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 5000}`)
  );
}).catch((err) => console.error("Error conectando a MongoDB:", err));
