
const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Eliminar todas las tareas de un grupo
router.delete("/:groupName", async (req, res) => {
  try {
    const { groupName } = req.params;
    await Task.deleteMany({ group: groupName });
    res.status(200).json({ message: "Grupo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando grupo", error });
  }
});

// Renombrar todas las tareas de un grupo
router.put("/:oldGroupName", async (req, res) => {
  try {
    const { oldGroupName } = req.params;
    const { newGroupName } = req.body;
    await Task.updateMany({ group: oldGroupName }, { group: newGroupName });
    res.status(200).json({ message: "Grupo actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error actualizando grupo", error });
  }
});

module.exports = router;
