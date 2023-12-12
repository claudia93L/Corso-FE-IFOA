const url = 'https://striveschool-api.herokuapp.com/api/product/';
const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYjM1ZDBkOGEyMDAwMThhNDhhMjUiLCJpYXQiOjE3MDE5NTAzMDEsImV4cCI6MTcwMzE1OTkwMX0.uISXyDIMS5UVZeTxWeSQs86AiDG9i5E81-6_TYTxTfw';

const header = {
  Authorization: token,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

let products = [];

const productName = document.getElementById('productName');
const productDescription = document.getElementById('productDescription');
const productBrand = document.getElementById('productBrand');
const productImageUrl = document.getElementById('productImageUrl');
const productPrice = document.getElementById('productPrice');

const getProducts = () => {
  fetch(url, {
    method: 'GET',
    headers: header,
  })
    .then((response) => response.json())
    .then((data) => {
      products = data;
      loadProducts(products);
    });
};

const createProduct = () => {
  const newProduct = {
    name: productName.value,
    description: productDescription.value,
    brand: productBrand.value,
    imageUrl: productImageUrl.value,
    price: productPrice.value,
  };

  fetch(url, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(newProduct),
  })
    .then((response) => response.json())
    .then((data) => {
      products.push(data);
      loadProducts(products);
    });
};

loadProducts = (data) => {
  data.forEach((el) => {
    console.log(el);
  });
};

resetForm = () => {
  productName.value = '';
  productDescription.value = '';
  productBrand.value = '';
  productImageUrl.value = '';
  productPrice.value = '';
};

window.onload = () => {
  getProducts();
};

verifyForm = () => {
  if (productName.value === '') {
    /* const productNameAlert = document.getElementById('productNameAlert');
    productNameAlert.classList.remove('d-none');
    productNameAlert.innerText = 'Please enter a product name'; */
    alert('Please enter a product name');
    return false;
  } else if (productDescription.value === '') {
    alert('Please enter a product description');
    return false;
  } else if (productBrand.value === '') {
    alert('Please enter a product brand');
    return false;
  } else if (productImageUrl.value === '') {
    alert('Please enter a product image url');
    return false;
  } else if (productPrice.value === '') {
    alert('Please enter a product price');
    return false;
  } else {
    createProduct();
    resetForm();
    return true;
  }
};
