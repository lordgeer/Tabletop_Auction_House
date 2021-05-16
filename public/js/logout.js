// Handles logout
const logout = async () => {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout-button').addEventListener('click', logout);