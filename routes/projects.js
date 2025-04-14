const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Obtener todos los proyectos
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Crear nuevo proyecto
router.post("/", async (req, res) => {
  try {
    const { name, owner } = req.body;
    const newProject = new Project({ name, owner });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error al crear proyecto:", error);
    res.status(500).json({ message: "Error al crear el proyecto", error });
  }
});


// Actualizar un proyecto
router.put("/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;
