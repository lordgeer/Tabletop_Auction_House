const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // Send the username and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/shop');
    } else {
      alert('Failed to log in');
    }
  }
};

document.getElementById("signup-button").addEventListener("click", function() {
  document.location.replace('/signup');
});
  
document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);