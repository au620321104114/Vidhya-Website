// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Get the form element
    const form = document.querySelector("form");
    
    // Get all form fields
    const nameField = form.querySelector('input[type="text"]');
    const emailField = form.querySelector('input[type="email"]');
    const messageField = form.querySelector('textarea');
    const submitButton = form.querySelector('.submit-btn');
    
    // Function to validate email
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // Form validation logic
    function validateForm() {
        let isValid = true;
        
        // Clear previous error messages
        document.querySelectorAll('.error').forEach(error => error.remove());

        // Validate name
        if (nameField.value.trim() === "") {
            isValid = false;
            showError(nameField, "Name is required.");
        }

        // Validate email
        if (emailField.value.trim() === "") {
            isValid = false;
            showError(emailField, "Email is required.");
        } else if (!validateEmail(emailField.value.trim())) {
            isValid = false;
            showError(emailField, "Please enter a valid email.");
        }

        // Validate message
        if (messageField.value.trim() === "") {
            isValid = false;
            showError(messageField, "Message is required.");
        }

        return isValid;
    }

    // Show error message below the input fields
    function showError(inputField, message) {
        const errorElement = document.createElement("div");
        errorElement.classList.add("error");
        errorElement.style.color = "red";
        errorElement.textContent = message;
        inputField.parentElement.appendChild(errorElement);
    }

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting the traditional way
        
        // Validate the form before submission
        if (validateForm()) {
            // Form is valid, simulate a message being sent
            alert('Form submitted successfully!');
            
            // Optionally clear the form after submission
            form.reset();
        }
    });

    // Prevent form submission if the submit button is clicked while validation fails
    submitButton.addEventListener('click', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

