//? hw-8
    // 1.   Ask the user to enter an email using prompt().
    // 2.   Validate the email according to the following rules:
    // •    It cannot be empty or null.
    // •    It must contain @.
    // •    @ cannot be at the beginning.
    // •    @ cannot be at the end.
    // •    The total length must be greater than 5 characters.
    // 3.    If the email does not meet any of these conditions, 
    //     display the appropriate error message using document.write().
    // 4.    Keep asking the user for a valid email until they enter a correct one.

let emailErr = document.querySelectorAll('.emailError');

let email;
do {
    email = prompt("Enter your email:");

    if (!email) {
        emailErr.innerText("Error: Email cannot be empty.<br>");
    } else if (email.indexOf('@') === -1) {
        emailErr.innerText = 'It must contain @.';
    } else if (email.charAt(0) === '@') {
        emailErr.innerText = "Error: '@' cannot be at the beginning.<br>";
    } else if (email.slice(-1) === '@') {
        emailErr.innerText = "Error: '@' cannot be at the end.<br>";
    } else if (email.length <= 5) {
        emailErr.innerText = "Error: Email length must be greater than 5 characters.<br>";
    } else {
        break;
    }
} while (true);