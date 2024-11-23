/*client/auth.js
const loginUrl = 'http://localhost:3000/api/login';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  // Event listener for the login form submission
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      // Send login credentials to the server
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: 'Unknown error occurred' }));
        throw new Error(errorData.error);
      }

      const result = await response.json();
      console.log('Login successful:');

      // Store the JWT token in sessionStorage instead of localStorage
      sessionStorage.setItem('token', result.token);

      // Display success message and update UI
      alert('Login successful!');
      updateLoginStatus();
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed: ' + error.message);
    }
  });

  // Logout function
  document
    .getElementById('logoutButton')
    .addEventListener('click', function () {
      sessionStorage.removeItem('token');
      updateLoginStatus();
    });

  // Call this function on page load to check login status
  updateLoginStatus();
});

// Login status indicator
const loginStatus = document.getElementById('loginStatus');

// Function to update the login status text
function updateLoginStatus() {
  const token = sessionStorage.getItem('token');

  if (token) {
    loginStatus.textContent = 'You are logged in. You can edit the calendar.';
  } else {
    loginStatus.textContent = 'To edit the calendar, please log in.';
  }
}

// Log out the user when the page is unloaded
window.addEventListener('beforeunload', function () {
  sessionStorage.removeItem('token');
});*/

const loginUrl = 'https://lm-server-server.onrender.com/api/login';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  // Event listener for the login form submission
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      // Send login credentials to the server
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: 'Unknown error occurred' }));
        throw new Error(errorData.error);
      }

      const result = await response.json();
      console.log('Login successful:');

      // Store the JWT token in sessionStorage instead of localStorage
      sessionStorage.setItem('token', result.token);

      // Display success message and update UI
      alert('Login successful!');
      updateLoginStatus();
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed: ' + error.message);
    }
  });

  // Logout function
  document
    .getElementById('logoutButton')
    .addEventListener('click', function () {
      sessionStorage.removeItem('token');
      updateLoginStatus();
    });

  // Call this function on page load to check login status
  updateLoginStatus();
});

// Login status indicator
const loginStatus = document.getElementById('loginStatus');

// Function to update the login status text
function updateLoginStatus() {
  const token = sessionStorage.getItem('token');

  if (token) {
    loginStatus.textContent = 'You are logged in. You can edit the calendar.';
  } else {
    loginStatus.textContent = 'To edit the calendar, please log in.';
  }
}

// Log out the user when the page is unloaded
window.addEventListener('beforeunload', function () {
  sessionStorage.removeItem('token');
});
