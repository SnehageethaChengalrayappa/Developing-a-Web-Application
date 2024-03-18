app.get('/courses/:courseId/tasks', async (req, res) => {
    try {
      const courseId = req.params.courseId;
      const tasks = await Task.find({ courseId });
  
      if (!tasks.length) {
        return res.status(404).json({ message: 'No tasks found for this course' });
      }
  
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });