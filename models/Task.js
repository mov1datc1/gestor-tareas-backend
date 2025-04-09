const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  status: String,
  owner: String,
  dueDate: String,
  priority: String,
  notes: String,
  group: String
});

module.exports = mongoose.model('Task', taskSchema);
