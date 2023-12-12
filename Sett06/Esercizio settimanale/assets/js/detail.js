const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
//console.log('Product ID:', id);

window.onload = async () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');
  console.log('Product ID:', id);

  try {
    const storedProducts = sessionStorage.getItem('products');
    if (!storedProducts) {
      throw new Error('Products not found in sessionStorage');
    }

    const data = JSON.parse(storedProducts);
    loadProduct(data, id);
  } catch (error) {
    console.error('Error loading product details:', error);
    alert('Product details not available');
  }
};

const loadProduct = (products) => {
  const detailImg = document.getElementById('detail-img');
  const detailInfos = document.getElementById('detail-infos');

  if (!detailImg || !detailInfos) {
    console.error('Error: Element not found');
    return;
  }

  const product = products.find((el) => el._id === id);

  //console.log('Product:', product); // Aggiunto per debug

  if (product) {
    detailImg.innerHTML = `<img class="card-img-top w-25 mx-auto" src="assets/img/img-cellphone.webp" alt="${product.description}">`;
    detailInfos.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.brand}</p>
        <p>€ ${product.price}</p>
      `;
  }
};
