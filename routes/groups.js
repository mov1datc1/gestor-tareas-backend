// backend/routes/groups.js
const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Eliminar todas las tareas de un grupo
router.delete("/:groupName", async (req, res) => {
  try {
    const { groupName } = req.params;
    const deleted = await Task.deleteMany({ group: groupName });
    res.status(200).json({ message: "Grupo eliminado correctamente", deleted });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando grupo", error });
  }
});

// Renombrar todas las tareas de un grupo
router.put("/:oldGroupName", async (req, res) => {
  try {
    const { oldGroupName } = req.params;
    const { newGroupName } = req.body;

    if (!newGroupName) {
      return res.status(400).json({ message: "El nuevo nombre del grupo es requerido" });
    }

    const updated = await Task.updateMany(
      { group: oldGroupName },
      { $set: { group: newGroupName } }
    );

    res.status(200).json({ message: "Grupo actualizado correctamente", updated });
  } catch (error) {
    res.status(500).json({ message: "Error actualizando grupo", error });
  }
});

module.exports = router;
