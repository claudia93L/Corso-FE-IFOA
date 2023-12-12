const url = 'https://striveschool-api.herokuapp.com/api/product/';
const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYjM1ZDBkOGEyMDAwMThhNDhhMjUiLCJpYXQiOjE3MDE5NTAzMDEsImV4cCI6MTcwMzE1OTkwMX0.uISXyDIMS5UVZeTxWeSQs86AiDG9i5E81-6_TYTxTfw';

const header = {
  Authorization: token,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

let products = [];

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
    name: document.getElementById('productName').value,
    description: document.getElementById('productDescription').value,
    brand: document.getElementById('productBrand').value,
    imageUrl: document.getElementById('productImageUrl').value,
    price: document.getElementById('productPrice').value,
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
