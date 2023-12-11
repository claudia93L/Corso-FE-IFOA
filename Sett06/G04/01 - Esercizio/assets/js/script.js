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
    card.innerHTML = `<div class="card mb-4 shadow-sm">
      <img class="card-img-top" src="${el.src.medium}" alt="${el.alt}" />  
      <div class="card-body">
        <h5 class="card-title">${el.alt}</h5>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Hide
            </button>
          </div>
          <small class="text-muted">${el.id}</small>
        </div>
      </div>
    </div>`;
    photoRow.appendChild(card);
  });
}

window.onload = () => {
  getPhotos();
};
