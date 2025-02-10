// Prompt the user for an initial action and convert input to lowercase for case-insensitivity
let input = prompt('What would you like to do?');
if (input !== null) input = input.toLowerCase(); // Handle null safely

// Create an array of to-dos
const todos = ['Collect eggs', 'Clean cat litter box'];

// While the user has not quit the app, continue to prompt the user for an action
while (input !== 'quit' && input !== 'q') {
    if (input === null) break; // Exit the app if the user cancels the prompt

    if (input === 'list') {
        console.log('**********');

        // If the to-do list is empty, inform the user
        if (todos.length === 0) {
            console.log('Your to-do list is empty.');
        } else {
            // Display each item with its index
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i}: ${todos[i]}`); // Example output: "0: Collect eggs"
            }
        }
        console.log('**********');

    } else if (input === 'new') { // If the user wants to add a new to-do
        const newTodo = prompt('Okay, what is the new to-do?');
        if (newTodo !== null) { // Check if the user didn’t cancel
            const trimmedTodo = newTodo.trim(); // Trim any leading or trailing whitespace
            if (trimmedTodo) { // Ensure the to-do isn’t empty
                todos.push(trimmedTodo);
                console.log(`"${trimmedTodo}" added to the list.`);
            } else {
                console.log('You cannot add an empty to-do.');
            }
        }

    } else if (input === 'delete') { // If the user wants to delete a to-do
        const indexInput = prompt('Okay, enter the index of the to-do to delete:');
        if (indexInput === null) {
            console.log('Deletion canceled.');
        } else {
            const index = parseInt(indexInput);

            // Validate the index
            if (!Number.isNaN(index) && index >= 0 && index < todos.length) {
                const deleted = todos.splice(index, 1); // Remove 1 to-do at the specified index
                console.log(`"${deleted[0]}" removed from your to-do list.`);
            } else {
                console.log('Unknown index. Please try again.');
            }
        }

    } else { // Handle unknown commands
        console.log('Unknown command. Please enter "new", "list", "delete", or "quit".');
    }

    // Prompt the user for another action
    input = prompt('What would you like to do?');
    if (input === null) break; // Check again after the next prompt
    input = input.toLowerCase(); // Convert to lowercase for consistent command handling
}

// If the user has quit the app, display a goodbye message
console.log('Okay, you have quit the app. Goodbye!');
