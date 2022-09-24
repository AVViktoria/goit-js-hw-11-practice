import axios from 'axios';

// const API_KEY = '30114983-364137b9a9ec33f130a531f95';
// const BASE_URL = 'https://pixabay.com/api/';

// async function getImgs(name, page) {
//   const options = {
//     url: BASE_URL,
//     options: {
//       key: API_KEY,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: false,
//       q: name,
//       page: page,
//       per_page: 40,
//     }
// }
// return await axios (options);
// }
// export { getImgs };



export default async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '11240134-58b8f655e9e0f8ae8b6e8e7de';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}