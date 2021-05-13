document.getElementById("home-button").addEventListener("click", function() {
    document.location.replace('/');
});

document.getElementById("logout-button").addEventListener("click", function() {
  // Add logout functionality
  console.log('Logout!');
  document.location.replace('/');
});

document.getElementById("addItem-button").addEventListener("click", function() {
    document.location.replace('/product');
});

// Need view item functionality