const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if (name && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/shop');
          } else {
            alert('Failed to Signup, Please try again\nIf your problem persists, please contact customer service\n(customer services still pending and are unavailable at this time)');
          }
      }
    };
    
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  