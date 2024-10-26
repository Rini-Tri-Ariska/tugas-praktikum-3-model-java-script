// JavaScript for Page Appearance Customization

// Change Background Color
const bgColorSelect = document.getElementById('bgColor');
bgColorSelect.addEventListener('change', function () {
    document.body.style.backgroundColor = this.value;
});

// Change Font Size
const fontSizeRange = document.getElementById('fontSize');
const fontSizeDisplay = document.getElementById('fontSizeDisplay');
fontSizeRange.addEventListener('input', function () {
    document.body.style.fontSize = this.value + 'px';
    fontSizeDisplay.textContent = this.value + 'px';
});

// Toggle Dark Mode
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
toggleDarkModeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Toggle Font Style
const toggleFontStyleButton = document.getElementById('toggleFontStyle');
toggleFontStyleButton.addEventListener('click', function () {
    // Get the current font family
    const currentFontFamily = window.getComputedStyle(document.body).fontFamily;

    // Check if it's sans-serif or serif and toggle
    if (currentFontFamily.includes('sans-serif')) {
        document.body.style.fontFamily = 'serif';
    } else {
        document.body.style.fontFamily = 'sans-serif';
    }
});


// JavaScript for To-Do List Functionality

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTask');

// Add Task
addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // Add edit and delete functionality
    addTaskControls(li);

    taskList.appendChild(li);
    taskInput.value = '';
});

// Function to add delete, edit, and mark complete controls to task
function addTaskControls(li) {
    // Delete button
    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    // Edit task on double click
    li.addEventListener('dblclick', function () {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = li.textContent.replace('X', '').trim();
        li.textContent = '';
        li.appendChild(input);
        input.focus();

        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                li.textContent = input.value;
                addTaskControls(li);  // Re-add the delete button
            }
        });
    });

    // Mark as complete
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    li.appendChild(deleteButton);
}