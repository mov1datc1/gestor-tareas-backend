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
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

// Actualizar un proyecto
router.put("/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;
