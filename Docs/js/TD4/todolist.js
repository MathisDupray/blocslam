const form = document.getElementById('todo_form');
const input = document.getElementById('todo_input');
const addButton = document.getElementById('add_button');
const list = document.getElementById('todo_list');
const deleteDoneButton = document.getElementById('delete_done_button');
const saveInput = document.getElementById('save_input');
const saveButton = document.getElementById('save_button');
const savedLists = document.getElementById('saved_lists');
const loadButton = document.getElementById('load_button');

let tasks = [];

// Load tasks from local storage
if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(task => {
    addTaskToList(task);
  });
}

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();
  const taskName = input.value.trim();
  if (taskName) {
    const task = { name: taskName, done: false };
    tasks.push(task);
    addTaskToList(task);
    saveTasks();
    input.value = '';
  }
});

// Add task to list
function addTaskToList(task) {
  const li = document.createElement('li');
  const doneCheckbox = document.createElement('input');
  doneCheckbox.type = 'checkbox';
  doneCheckbox.checked = task.done;
  doneCheckbox.className = 'done-checkbox';
  doneCheckbox.addEventListener('change', () => {
    task.done = doneCheckbox.checked;
    saveTasks();
  });
  const taskName = document.createElement('span');
  taskName.textContent = task.name;
  taskName.className = 'task-name';
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      li.remove();
      saveTasks();
    }
  });
  li.appendChild(doneCheckbox);
  li.appendChild(taskName);
  li.appendChild(deleteButton);
  list.appendChild(li);
}

// Delete done tasks
deleteDoneButton.addEventListener('click', () => {
  tasks = tasks.filter(task => !task.done);
  list.innerHTML = '';
  tasks.forEach(task => {
    addTaskToList(task);
  });
  saveTasks();
});

// Save task list
saveButton.addEventListener('click', () => {
  const listName = saveInput.value.trim();
  if (listName) {
    const savedList = { name: listName, tasks: tasks };
    let savedListsData = [];
    if (localStorage.getItem('savedLists')) {
      savedListsData = JSON.parse(localStorage.getItem('savedLists'));
    }
    savedListsData.push(savedList);
    localStorage.setItem('savedLists', JSON.stringify(savedListsData));
    saveInput.value = '';
    populateSavedListsDropdown();
  }
});

// Load task list
loadButton.addEventListener('click', () => {
  const selectedListIndex = savedLists.selectedIndex;
  if (selectedListIndex !== -1) {
    const selectedList = JSON.parse(savedLists.options[selectedListIndex].value);
    tasks = selectedList.tasks;
    list.innerHTML = '';
    tasks.forEach(task => {
      addTaskToList(task);
    });
    saveTasks();
  }
});

// Populate saved lists dropdown
function populateSavedListsDropdown() {
  savedLists.innerHTML = '';
  let savedListsData = [];
  if (localStorage.getItem('savedLists')) {
    savedListsData = JSON.parse(localStorage.getItem('savedLists'));
  }
  savedListsData.forEach((savedList, index) => {
    const option = document.createElement('option');
    option.value = JSON.stringify(savedList);
    option.textContent = savedList.name;
    savedLists.appendChild(option);
  });
}

// Call function to populate saved lists dropdown initially
populateSavedListsDropdown();

// Save tasks to local storage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}