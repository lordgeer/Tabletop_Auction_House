const productFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const itemName = document.querySelector('#item-name').value.trim();
    const itemPrice = document.querySelector('#item-price').value.trim();
    const itemQuantity = document.querySelector('#item-quantity').value.trim();
    const itemCategory = document.querySelector('#item-category').value;
    const itemTag = document.querySelector('#item-tag').value;   
  
    if (itemName && itemPrice && itemQuantity && itemCategory && itemTag) {
      // Send the item-name and password to the server
      const response = await fetch('/api/products/product', {
        method: 'POST',
        body: { item: itemName, price: itemPrice, quantity: itemQuantity, category: itemCategory, tag_id: itemTag },
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(itemName);
      if (response.ok) {
        document.location.replace('/shop');
        alert('Your item has been added! Thanks for using the Auction House!')
      } else {
        alert('The item you were looking to add does not want to, maybe check again?');
      }
    }
  };

document.getElementById("product-form").addEventListener("submit", productFormHandler);

document.getElementById("goBack-button").addEventListener("click", function() {
    document.location.replace('/shop');
});