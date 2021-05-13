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

function viewItem() {
  var x, i;
  x = document.querySelectorAll(".viewItem-button");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function() {
      var value = 2;
      console.log(x[value].attributes[2].nodeValue);
    });
  }
}

viewItem();