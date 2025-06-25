// Add event listener for mouse movement to track cursor position
addEventListener('mousemove', (e) => {
    // Get the custom cursor element from the DOM
    const cursor = document.getElementById('cursor');
    // Check if the user is on a mobile device using user agent detection
    if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
        // Hide the custom cursor on mobile devices by setting opacity to 0
        cursor.style.opacity = '0';
    }
    // Check if the cursor element exists in the DOM
    if (!cursor) {
        // Log a message if cursor element is not found
        console.log("no cursor")
        // Exit the function early if cursor doesn't exist
        return;
    }
    // Update the cursor's vertical position based on mouse Y coordinate
    cursor.style.top = `${e.clientY}px`;
    // Update the cursor's horizontal position based on mouse X coordinate
    cursor.style.left = `${ e.clientX}px`;
})

// Function to initialize the custom cursor
export const initCursor = () => {
    // Get the custom cursor element from the DOM
    const cursor = document.getElementById('cursor');
    // Make the cursor visible by setting display to block
    cursor.style.display = "block";
    // Check if the user is on a mobile device using user agent detection
    if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
        // Hide the custom cursor on mobile devices by setting opacity to 0
        cursor.style.opacity = '0';
    }
}