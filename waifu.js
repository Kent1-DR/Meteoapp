const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
const params = {
  included_tags: 'selfies',
  is_nsfw: false,
  height: '>=2000'
};

const queryParams = new URLSearchParams(params);
const requestUrl = `${apiUrl}?${queryParams}`;

fetch(requestUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed with status code: ' + response.status);
    }
  })
  .then(data => {
    // Process the response data and display it on the page
    const waifuImagesDiv = document.getElementById('waifu-images');
    data.images.forEach(waifu => {
      const image = document.createElement('img');
      image.src = waifu.url; // Utiliser l'URL de l'image
      image.alt = waifu.image_id; // Utiliser l'ID de l'image comme attribut alt
      waifuImagesDiv.appendChild(image);
    });
  })
  .catch(error => {
    console.error('An error occurred:', error.message);
  });

