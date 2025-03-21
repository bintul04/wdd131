// // Select the input, button, and list elements
// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.querySelector('#list');

// // Add an event listener to the button
// button.addEventListener('click', () => {
//     const chapter = input.value.trim();

//     // Check if the input is not empty
//     if (chapter === '') {
//         alert('Please enter a chapter title!');
//         return;
//     }

//     const listItem = document.createElement('li');
//     listItem.textContent = chapter;

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = '❌';
//     deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

//     listItem.append(deleteButton);

//     list.appendChild(listItem);

//     input.value = '';
//     input.focus();

//     // Add an event listener to the delete button
//     deleteButton.addEventListener('click', () => {
//         list.removeChild(listItem);
//     });
// });











// Select the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add an event listener to the Add Chapter button
button.addEventListener('click', () => {
    // Check if input is not blank
    if (input.value.trim() !== '') {
        const chapter = input.value.trim(); // Get and trim the input value

        // Create the list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = chapter; // Set the chapter as the list item text

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; // Add ❌ as button text
        deleteButton.setAttribute('aria-label', `Remove ${chapter}`); // Add accessibility with aria-label

        // Append the delete button to the list item
        listItem.append(deleteButton);

        // Append the list item to the unordered list
        list.appendChild(listItem);

        // Clear the input field and return focus to it
        input.value = ''; // Clear the input field
        input.focus(); // Set focus back to the input field

        // Add an event listener to the delete button to remove the list item
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem); // Remove the corresponding list item
            input.focus(); // Return focus to the input field
        });
    } else {
        // Alert the user if the input is blank
        alert('Please enter a valid chapter!');
        input.focus(); // Ensure focus returns to the input field
    }
});
