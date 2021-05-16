// Handles the product form to allow items to be added to shop
const productFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const product_name = document.querySelector('#item-name').value.trim();
    const price = document.querySelector('#item-price').value.trim();
    const stock = document.querySelector('#item-quantity').value.trim();
    const category_id = document.querySelector('#item-category').value;
    // Different shop selectors not currently being used
    // const tag_id = document.querySelector('#item-tag').value;
  
    if (product_name && price && stock && category_id) {
      // Send the item-name and password to the server
      const response = await fetch('/api/products/product', {
        method: 'POST',
        body: JSON.stringify({product_name, price, stock, category_id}),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/shop');
        alert('Your item has been added! Thanks for using the Auction House!');
      } else {
        alert('The item you did not add, please try again?');
      }
    }
  };
// Selectors and event listeners
document.getElementById("product-form").addEventListener("submit", productFormHandler);

document.getElementById("goBack-button").addEventListener("click", function() {
    document.location.replace('/shop');
});