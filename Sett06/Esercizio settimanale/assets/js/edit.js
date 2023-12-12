const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

console.log('Product ID:', id);

window.onload = async () => {
  try {
    const data = await getProducts();
    const product = data.find((el) => el._id === id);

    if (product) {
      populateForm(product);
      addEditDeleteButtons(product);
    } else {
      alert('Product not found');
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

  editBtn.classList.remove('d-none');
  deleteBtn.classList.remove('d-none');

  editBtn.addEventListener('click', () => {
    editProduct(product._id);
  });

  deleteBtn.addEventListener('click', () => {
    deleteProduct(product._id);
  });
};
