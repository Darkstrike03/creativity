
// JavaScript Functionality
const display = document.getElementById("display");
const popup = document.getElementById("popup");
function goBack(){
    window.history.back();
}
// Append value to the display
function appendToDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear the display
function clearDisplay() {
    display.innerText = "0";
}

// Delete the last character
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || "0";
}

// Calculate and display the result
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

// Show popup
function showPopup() {
    popup.style.display = "block";
}

// Close popup
function closePopup() {
    popup.style.display = "none";
}
