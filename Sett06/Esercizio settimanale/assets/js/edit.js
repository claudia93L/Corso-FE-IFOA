const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

//console.log('Product ID:', id);

window.onload = async () => {
  try {
    const data = await getProducts();
    const product = data.find((el) => el._id === id);

    if (product) {
      populateForm(product);
      addEditDeleteButtons(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const populateForm = (product) => {
  productName.value = product.name;
  productDescription.value = product.description;
  productBrand.value = product.brand;
  productImageUrl.value = product.imageUrl;
  productPrice.value = product.price;
};

const addEditDeleteButtons = (product) => {
  const editBtn = document.getElementById('editButton');
  const deleteBtn = document.getElementById('deleteButton');

  const pageTitle = document.querySelector('h1');
  pageTitle.innerText = "Product's management form";
  editBtn.classList.remove('d-none');
  deleteBtn.classList.remove('d-none');

  editBtn.onclick = () => {
    saveEditProduct(product._id);
  };

  deleteBtn.onclick = () => {
    deleteProduct(product._id);
  };
};

const deleteProduct = (id) => {
  if (confirm('Do you want to delete this product?')) {
    const finalUrl = url + id;
    fetch(finalUrl, {
      method: 'DELETE',
      headers: header,
    }).then(() => {
      products.splice(
        products.findIndex((product) => product._id === id),
        1
      );
      alert('Product deleted successfully');
      resetForm();
    });
  }
};

const saveEditProduct = async (id) => {
  if (confirm('Do you want to edit this product?')) {
    const finalUrl = url + id;

    const newProductInfos = {
      name: productName.value,
      description: productDescription.value,
      brand: productBrand.value,
      imageUrl: productImageUrl.value,
      price: productPrice.value,
    };

    try {
      const response = await fetch(finalUrl, {
        method: 'PUT',
        headers: header,
        body: JSON.stringify({
          newProductInfos,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Error updating product: ${response.status} - ${response.statusText}`
        );
      }

      const updatedProduct = await response.json();

      // Trova e sostituisci il prodotto nella tua array products
      const index = products.findIndex((product) => product._id === id);
      products[index] = updatedProduct;

      // Carica nuovamente i prodotti solo se productGrid esiste
      const productGrid = document.getElementById('productGrid');
      if (productGrid) {
        await loadProducts(products);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  }
};
