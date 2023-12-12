const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
//console.log('Product ID:', id);

window.onload = async () => {
  try {
    const data = await getProducts();
    loadProduct(data);
  } catch (error) {
    console.error('Error fetching products:', error);
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
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <p>${product.brand}</p>
        <p>€ ${product.price}</p>
      `;
  } else {
    alert('Product not found');
  }
};
