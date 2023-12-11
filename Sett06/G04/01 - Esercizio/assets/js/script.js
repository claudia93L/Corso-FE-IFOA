const url = 'https://api.pexels.com/v1/search?query=';
const token = 'OD1i5YYvU6aVGaAUZwajwqJLRjhiZgI5us8ZsSBRMa2XkUGy0aUldRZf';
const header = {
  Authorization: token,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
let photos = [];
let query;

const loadImagesBtn = document.getElementById('loadImagesBtn');
const loadSecondaryImagesBtn = document.getElementById(
  'loadSecondaryImagesBtn'
);
const searchBtn = document.getElementById('searchBtn');

const getPhotos = (query) => {
  fetch(url + query, {
    headers: header,
  })
    .then((response) => response.json())
    .then((data) => {
      photos = data.photos;
      loadPhotos(data.photos);
    });
};

loadImagesBtn.onclick = () => {
  getPhotos('cat');
  loadPhotos(photos);
};

loadSecondaryImagesBtn.onclick = () => {
  getPhotos('dog');
  loadPhotos(photos);
};

function loadPhotos(photos) {
  const photoRow = document.getElementById('photo-row');
  photoRow.innerHTML = '';

  photos.forEach((el) => {
    const card = document.createElement('div');
    card.classList.add('col-4');
    card.innerHTML = `<div class="card mb-4 shadow-sm">
    <img class="card-img-top" src="${el.src.medium}" alt="${el.alt}" data-bs-toggle="modal" data-bs-target="#modal" />
      <div class="card-body">
        <h5 class="card-title" data-bs-toggle="modal" data-bs-target="#modal">${el.alt}</h5>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary viewImgBtn">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary hideBtn">
              Hide
            </button>
          </div>
          <small class="text-muted">${el.id}</small>
        </div>
      </div>
    </div>`;
    photoRow.appendChild(card);

    const img = card.querySelector('img');
    const h5 = card.querySelector('.card-title');

    const hideBtn = card.querySelector('.hideBtn');
    const viewImgBtn = card.querySelector('.viewImgBtn');

    img.onclick = () => {
      createModalDetails(el);
    };

    h5.onclick = () => {
      createModalDetails(el);
    };

    hideBtn.onclick = () => {
      hideCard(card);
    };

    viewImgBtn.onclick = () => {
      createModalPhoto(el);
    };
  });
}

function hideCard(card) {
  card.closest('.col-4').remove();
}

searchBtn.onclick = () => {
  const searchInput = document.getElementById('search-box');
  const searchedQuery = searchInput.value;
  getPhotos(searchedQuery);
  loadPhotos(photos);
};

function createModalDetails(el) {
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = `
  <img class="card-img-top" src="${el.src.medium}" alt="${el.alt}" />
  <h5 class="card-title">${el.photographer}</h5>
  <a href="${el.photographer_url}" target="_blank">${el.photographer_url}</a>
`;
}

// sistemare apertura della seconda modale

function createModalPhoto(el) {
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = `<img class="card-img-top" src="${el.src.landscape}" alt="${el.alt}" />`;
}

window.onload = () => {
  getPhotos();
};
