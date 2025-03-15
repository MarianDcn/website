const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const valueInput = document.getElementById("valueInput");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");

let values = [155, 139, 162, 153, 144, 174, 127, 157, 148, 118, 182, 138, 147, 111, 160, 177, 153, 176, 190, 155,
    117, 164, 162, 151, 120, 174, 188, 110, 177, 107, 139, 195, 108, 198, 144, 136, 137, 155, 127, 125,
    126, 181, 189, 114, 160, 181, 122, 200, 199, 103, 154, 162, 184, 186, 110, 175, 142, 164, 172, 196,
    102, 153, 153, 187, 130, 101, 1704, 1034, 1308, 1900, 1909, 1103, 1508, 146, 156, 110, 145, 191, 156, 109,
    122, 194, 119, 157, 179, 168, 148, 164, 200, 199, 180, 188, 174, 189, 136, 125, 108, 150, 178, 111]
; // Predefined list of values
let maxValue = Math.max(...values); // Initial max value based on predefined list
// Initially update the canvas with predefined values
updateCanvas();

// Event listener for the button to add new value from user input
addButton.addEventListener("click", function() {
    let inputValue = parseInt(valueInput.value);
    if (isNaN(inputValue) || inputValue <= 0) return; // Ignore invalid values
    if (inputValue > maxValue) {
        maxValue = inputValue; // Update maxValue if the new input is higher
    }
    values.push(inputValue); // Add the new value to the list
    updateCanvas();
});
deleteButton.addEventListener("click", function() {
    values.pop();
    updateCanvas();
});
valueInput.addEventListener("click", function() {
    valueInput.value="";
    updateCanvas();
});

// Function to update the canvas
function updateCanvas() {
    const maxWidth = 400; // The fixed width of the canvas
    const rectangleWidth = 2; // The initial width of each rectangle
    const horizontalSpacing = 1; // Space between each rectangle

    // Dynamically calculate the width of each rectangle based on the number of values
    const newRectangleWidth = Math.max((maxWidth - (values.length - 1) * horizontalSpacing) / values.length, rectangleWidth);

    // Calculate the scaling factor for the rectangle height based on the max value
    const heightScalingFactor = canvas.height / maxValue;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before redrawing

    // Loop through the values and draw each one as a rectangle
    values.forEach((value, index) => {
        let scaledHeight = value * heightScalingFactor; // Scale the value to the canvas height
        let xPos = index * (newRectangleWidth + horizontalSpacing); // Calculate the horizontal position of each rectangle

        ctx.fillStyle = "blue";
        ctx.fillRect(xPos, canvas.height - scaledHeight, newRectangleWidth, scaledHeight); // Draw the rectangle
        ctx.fillStyle = "black";
       // ctx.fillText(`${value} (${Math.round((value / maxValue) * 100)}%)`, xPos, canvas.height - scaledHeight - 10); // Display the value and percentage
    });
}