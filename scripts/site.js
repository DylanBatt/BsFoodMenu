// JavaScript
function flashIcon() {
    const icon = document.getElementById('flash-icon');
    let isVisible = true;

    // Flash interval (500ms = half second)
    const flashInterval = setInterval(() => {
        icon.style.opacity = isVisible ? '0' : '1';
        isVisible = !isVisible;
    }, 600);

    // Optional: Stop flashing after 5 seconds
    setTimeout(() => {
        clearInterval(flashInterval);
        icon.style.opacity = '1'; // Ensure it's visible when stopped
    }, 30000);
}

// Start flashing when page loads
window.onload = flashIcon;

// To manually start/stop flashing:
let flashInterval;

function startFlashing() {
    flashInterval = setInterval(() => {
        const icon = document.getElementById('flash-icon');
        icon.style.opacity = icon.style.opacity === '0' ? '1' : '0';
    }, 500);
}

function stopFlashing() {
    clearInterval(flashInterval);
    document.getElementById('flash-icon').style.opacity = '1';
}