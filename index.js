// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.


document.addEventListener("DOMContentLoaded", () => {
  // safe DOM setup (optional for browser use)
});

/* -----------------------------
   1. ADD ELEMENT
----------------------------- */
function addElementToDOM(id, text) {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement("div");
    element.id = id;
    document.body.appendChild(element);
  }

  element.textContent = text;
}

/* -----------------------------
   2. REMOVE ELEMENT
----------------------------- */
function removeElementFromDOM(id) {
  const element = document.getElementById(id);

  if (element) {
    element.remove();
  }
}

/* -----------------------------
   3. SIMULATE CLICK
----------------------------- */
function simulateClick(id, text) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = text;
  }
}

/* -----------------------------
   4. HANDLE FORM SUBMIT
----------------------------- */
function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const output = document.getElementById(outputId);
  const input = form.querySelector("input");

  const value = input.value.trim();

  // error message element
  let error = document.getElementById("error-message");
  if (!error) {
    error = document.createElement("div");
    error.id = "error-message";
    document.body.appendChild(error);
  }

  if (value === "") {
    error.textContent = "Input cannot be empty";
    error.classList.remove("hidden");
    return;
  }

  error.textContent = "";
  error.classList.add("hidden");

  output.textContent = value;
}

/* -----------------------------
   MAKE FUNCTIONS AVAILABLE TO TESTS
----------------------------- */
if (typeof module !== "undefined") {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit
  };
}