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
    x[i].addEventListener("click", function(target) {
      document.location.replace(`/view/${target.path[0].attributes[2].nodeValue}`);
    });
  }
}

viewItem();

function deleteItem() {
  var x, i;
  x = document.querySelectorAll(".deleteItem-button");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(target) {
      // delete function here
      console.log(`delete ${target.path[0].attributes[2].nodeValue}`)
    });
  }
}

deleteItem();