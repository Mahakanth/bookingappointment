let form = document.getElementById("form");
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let textElement = document.getElementById('text');

// Load data from local storage when the page loads
window.addEventListener('load', () => {
    updateDisplay();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let username = usernameInput.value;
    let password = passwordInput.value;

    // Load existing data from local storage
    let existingData = JSON.parse(localStorage.getItem('formData')) || [];

    // Add the new data to the existing data array
    existingData.push({ username, password });

    // Store the updated data array back in local storage
    localStorage.setItem('formData', JSON.stringify(existingData));

    console.log(existingData);

    // Update the display with all submitted details
    updateDisplay();
});

function updateDisplay() {
    let storedData = JSON.parse(localStorage.getItem('formData'));

    if (storedData && storedData.length > 0) {
        let displayText = '';
        storedData.forEach(data => {
            displayText += `username: ${data.username}, password: ${data.password}\n`;
        });
        textElement.innerText = displayText;
    } else {
        textElement.innerText = 'No submitted details yet.';
    }
}
document.getElementById("clear").addEventListener('click',()=>{
    localStorage.clear();
})
