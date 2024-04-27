/**
 * @param {{ preventDefault: () => void; }} event
 */
function handleSubmit(event) {
    const nameField = document.querySelector('input[name="name"]');
    const nameValue = nameField.value;

    // Check if the name field contains any number
    if (/\d/.test(nameValue)) {
        alert('Name field cannot contain numbers!');
        event.preventDefault(); // Stop the form submission
    }
}

export default handleSubmit;
