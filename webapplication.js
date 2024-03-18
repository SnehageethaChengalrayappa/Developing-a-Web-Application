const form = document.getElementById('task-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const courseId = document.getElementById('courseId').value;
  const taskName = document.getElementById('taskName').value;
  const dueDate = document.getElementById('dueDate').value;
  const additionalDetails = document.getElementById('additionalDetails').value;

  const response = await fetch(`/courses/${courseId}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      taskName,
      dueDate,
      additionalDetails,
    }),
  });

  if (response.ok) {
    alert('Task added successfully');
    form.reset();
  } else {
    alert('Error adding task');
  }
});