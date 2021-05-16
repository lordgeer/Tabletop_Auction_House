// Go back button function
document.getElementById("goBack-button").addEventListener("click", function () {
    document.location.replace('/shop');
});

// Delete items
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
            "There may have been a problem deleting. Please try again."
          );
        }
      };

      delButtonHandler();
    });
  }
}

deleteItem();

// Item category shows
switch(document.getElementById("item-category").attributes[3].nodeValue) {
  case "1":
    document.getElementById("item-category").innerHTML = "Weapons";
    break;
  case "2":
    document.getElementById("item-category").innerHTML = "Armor";
    break;
  case "3":
    document.getElementById("item-category").innerHTML = "Utility";
    break;
  case "4":
    document.getElementById("item-category").innerHTML = "Technology";
    break;
  case "5":
    document.getElementById("item-category").innerHTML = "Companions";
    break;
  case "6":
    document.getElementById("item-category").innerHTML = "Droids";
    break;
  case "7":
    document.getElementById("item-category").innerHTML = "Magic Items";
    break;
  case "8":
    document.getElementById("item-category").innerHTML = "Vehicles";
    break;
  case "9":
    document.getElementById("item-category").innerHTML = "Mounts";
    break;
}