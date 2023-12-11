const url = 'https://api.pexels.com/v1/search?query=';
const token = 'OD1i5YYvU6aVGaAUZwajwqJLRjhiZgI5us8ZsSBRMa2XkUGy0aUldRZf';
const header = {
  Authorization: token,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const photos = [];

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
