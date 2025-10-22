// Update the time element with the current timestamp
document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    timeElement.textContent = Date.now();
});
