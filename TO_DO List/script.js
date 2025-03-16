// Get elements from the DOM
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a task to the list
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task item
  const li = document.createElement('li');

  // Create task text element
  const span = document.createElement('span');
  span.textContent = taskText;

  // Create a complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.classList.add('complete-btn');

  // Create a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('delete-btn');

  // Add event listeners for the buttons
  completeBtn.addEventListener('click', () => {
    span.classList.toggle('completed'); // Toggle the completed class
  });

  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li); // Remove the task from the list
  });

  // Append elements to the list item
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow pressing Enter to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
