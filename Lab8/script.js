// Wait until the DOM (HTML structure) is fully loaded
$(document).ready(function () {
    // Add a click event listener to the "Roll Dice" button
    $("#roll-button").click(function () {
        // Start the rolling animation by adding the "rolling" class
        $("#die1").addClass("rolling");

        // After 0.8 seconds (duration of the animation), stop the animation
        setTimeout(() => {
            $("#die1").removeClass("rolling"); // Remove "rolling" class
            const randomNumber = Math.floor(Math.random() * 6) + 1; // Generate random number (1-6)
            updateDiceFace(randomNumber); // Update the dice face based on the random number
        }, 800); // Delay matches animation duration
    });

    // Function to update the dice face with a specific number
    function updateDiceFace(number) {
        $(".dot").css("visibility", "hidden"); // Hide all dots initially

        // Predefined dot positions for each dice face (1-6)
        const dicePatterns = {
            1: [5], // Center dot
            2: [1, 9], // Top left, bottom right
            3: [1, 5, 9], // Top left, center, bottom right
            4: [1, 3, 7, 9], // Four corners
            5: [1, 3, 5, 7, 9], // Four corners + center
            6: [1, 3, 4, 6, 7, 9], // Two rows of three
        };

        // Show the specific dots for the rolled number
        dicePatterns[number].forEach((dot) => {
            $(`#die1 .dot:nth-child(${dot})`).css("visibility", "visible");
        });
    }
});
