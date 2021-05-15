document.getElementById("goBack-button").addEventListener("click", function() {
    document.location.replace('/shop');
});

function deleteItem() {
  var x, i;
  x = document.querySelectorAll(".deleteItem-button");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function (target) {
      const delButtonHandler = async () => {
        const response = await fetch(
          `/api/products/${target.path[0].attributes[2].nodeValue}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          document.location.replace("/shop");
        } else {
          alert(
            "There may have been a problem deleting. Maybe check that out and try again"
          );
        }
      };

      delButtonHandler();
    });
  }
}

deleteItem();