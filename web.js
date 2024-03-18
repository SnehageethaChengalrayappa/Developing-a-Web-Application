const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/student_tasks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const courseSchema = new mongoose.Schema({
  courseId: String,
  courseName: String,
});

const taskSchema = new mongoose.Schema({
  courseId: String,
  taskName: String,
  dueDate: Date,
  additionalDetails: String,
});

const Course = mongoose.model('Course', courseSchema);
const Task = mongoose.model('Task', taskSchema);

app.use(express.json());