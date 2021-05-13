
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('product-id')) {
      const id = event.target.getAttribute('product-id');
  
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/product');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  