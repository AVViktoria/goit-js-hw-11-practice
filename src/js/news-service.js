import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Notify } from 'notiflix';
import LoadMoreBtn from './load-more-btn';


// const loadMoreBtn = new LoadMoreBtn();
        
//* данные ключа и url c сайта pixabay
const API_KEY = '30114983-364137b9a9ec33f130a531f95';
    const BASE_URL = 'https://pixabay.com/api/';
export default class NewsApiService {
  
  //*     Хранение терминов запроса
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
//* забирает hits с помощью url и возвращает hits
  fetchHits() {
    
    const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=5&page=${this.page}`;

    return fetch(url)
      .then(response => response.json())

      .then(({ hits }) => {
        this.incrementPage();

        
        if (hits.length === 0) { 
          // loadMoreBtn.hide();
          Notify.warning('Sorry, there are no images matching your search query. Please try again.');
          return;
        }
        if(hits === hits.totalHits ){
          return Notify.warning( "We're sorry, but you've reached the end of search results.")
        }
        ;
        Notify.success(`Hooray! We found ${hits.length} images.`)
        return hits;
      });   



        }

//*  увеличиваем страницу на 1
  incrementPage() {
    this.page += 1;
  }

//*  сбрасываем номера страниц
  resetPage() {
    this.page = 1;
  }
//*  получить
  get query() {
    return this.searchQuery;
  }
//*  записать
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}


// import axios from 'axios';

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

// export default async function fetchImages(value, page) {
//   const url = 'https://pixabay.com/api/';
//   const key = '11240134-58b8f655e9e0f8ae8b6e8e7de';
//   const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

//   return await axios.get(`${url}${filter}`).then(response => response.data);
// }