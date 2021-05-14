
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('product-id')) {
      const id = event.target.getAttribute('product-id');
  
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/product');
      } else {
        alert('Thre may have been a problem delteting. Maybe check that out and try again');
      }
    }
  };
  