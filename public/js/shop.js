document.getElementById("logout-button").addEventListener("click", function() {
  // Add logout functionality
  console.log('Logout!');
  document.location.replace('/');
});

// Send you to product
document.getElementById("addItem-button").addEventListener("click", function() {
  document.location.replace('/product');
});

// Allow viewing the item
function viewItem() {
  var x, i;
  x = document.querySelectorAll(".viewItem-button");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(target) {
      document.location.replace(`/view-item/${target.path[0].attributes[2].nodeValue}`);
    });
  }
}

viewItem();

// Allows to delete the item
function deleteItem() {
  var x, i;
  x = document.querySelectorAll(".deleteItem-button");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(target) {
      const delButtonHandler = async () => {
        const response = await fetch(`/api/products/${target.path[0].attributes[2].nodeValue}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          document.location.replace('/shop');
        } else {
          alert('There was a problem with deleting. Please try again.');
        }
      };

      delButtonHandler();
    });
  }
}

deleteItem();