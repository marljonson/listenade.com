// insertNavbars.js

// Function to load navbar-top.html, navbar-bottom.html into the page
function loadNavbars() {
    const navbarContainerTop = document.getElementById('navbar-bottom'); // Find the container element by ID
    if (navbarContainerTop) {
        fetch('/navbar-bottom.html')  // Fetch navbar-top.html
            .then(response => response.text())
            .then(data => {
                navbarContainerTop.innerHTML = data; // Insert the content of navbar-top.html into the container
            })
            .catch(error => {
                console.error('Error loading the navbar:', error);
            });
    }
    const navbarContainerBottom = document.getElementById('navbar-top'); // Find the container element by ID
    if (navbarContainerBottom) {
        fetch('/navbar-top.html')  // Fetch navbar-top.html
            .then(response => response.text())
            .then(data => {
                navbarContainerBottom.innerHTML = data; // Insert the content of navbar-top.html into the container
            })
            .catch(error => {
                console.error('Error loading the navbar:', error);
            });
    }
}

// Run the loadNavbarTop and loadNavbarBottom functions when the page has finished loading
window.onload = loadNavbars;