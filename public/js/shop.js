document.getElementById("home-button").addEventListener("click", function() {
    document.location.replace('/');
});

document.getElementById("logout-button").addEventListener("click", function() {
  // Do logout stuff
  console.log('click');
});

document.getElementById("product-button").addEventListener("click", function() {
    document.location.replace('/product');
});

// Edit and delete buttons for partials have be linked by id...