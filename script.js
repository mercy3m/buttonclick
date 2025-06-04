// script.js

// Function to show an alert when the button is clicked
function greetUser() {
    alert("Hello! Welcome to our website.");
}

// Attach the function to the button click event
document.addEventListener("DOMContentLoaded", function() {
    const greetButton = document.getElementById("greetButton");
    greetButton.addEventListener("click", greetUser);
});
