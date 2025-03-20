// Select the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add an event listener to the button
button.addEventListener('click', () => {
    const chapter = input.value.trim();

    // Check if the input is not empty
    if (chapter === '') {
        alert('Please enter a chapter title!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = chapter;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

    listItem.append(deleteButton);

    list.appendChild(listItem);

    input.value = '';
    input.focus();

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });
});
