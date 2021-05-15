document.getElementById("goBack-button").addEventListener("click", function() {
  document.location.replace('/');
});

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (name && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
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
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  
document.getElementById("eyeButton").addEventListener("click", function() {
  if (document.querySelector('#password-signup').type === "password") {
    document.querySelector('#password-signup').type = "input";
  }
  else {
    document.querySelector('#password-signup').type = "password";
  }
});