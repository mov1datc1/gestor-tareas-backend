const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: String,  // Antes era "title"
  owner: String,
  status: {
    type: String,
    enum: ["pendiente", "en curso", "en pruebas", "por aprobacion", "finalizado"],
    default: "pendiente"
  }
});

module.exports = mongoose.model("Project", ProjectSchema);
