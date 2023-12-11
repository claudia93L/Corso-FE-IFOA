const url = 'https://api.pexels.com/v1/search?query=';
const token = 'OD1i5YYvU6aVGaAUZwajwqJLRjhiZgI5us8ZsSBRMa2XkUGy0aUldRZf';
const header = {
  Authorization: token,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const photos = [];

const loadImagesBtn = document.getElementById('loadImagesBtn');
const loadSecondaryImagesBtn = document.getElementById(
  'loadSecondaryImagesBtn'
);

const photoRow = document.getElementById('photo-row');

const getPhotos = () => {
  fetch(url, {
    headers: header,
  })
    .then((response) => response.json())
    .then((data) => {
      photos = data;
      loadPhotos(data);
    });
};

function loadPhotos(data) {
    data.photos.forEach(el => {
        photoRow.innerHTML = `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Thumbnail"
          >
            <title>${}</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>`
    })
}
