//*   IMPORTS  libraries

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Notify } from 'notiflix';

//*   IMPORTS  components  files
import './css/common.css';
// import cardTemplate from './templates/oneCardTemplate.hbs';
// import fetchImages from './js/news-service';
// import { onClickLoadMoreBtn } from './js/load-more-btn';

//*     CONSTANTS
const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('[type="text"]'),
  submitBtn: document.querySelector('[type="submit"]'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
  spinner: document.querySelector('.spinner-border'),
};
 


  

// import articlesTpl from './templates/articles.hbs';
// import './css/common.css';
// import NewsApiService from './js/news-service';
// import LoadMoreBtn from './js/components/load-more-btn';

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
// };
// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });
// const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();
  const API_KEY = '30114983-364137b9a9ec33f130a531f95';
  const BASE_URL = 'https://pixabay.com/api/';
  const searchQuery = e.currentTarget.searchQuery.value;
  fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`
  )
    .then(r => r.json())
    .then(console.log);
  // newsApiService.query = e.currentTarget.elements.query.value;

  // if (newsApiService.query === '') {
  //   return alert('Введи что-то нормальное');
  // }
}
//   loadMoreBtn.show();
//   newsApiService.resetPage();
//   clearArticlesContainer();
//   fetchArticles();
// }

// function fetchArticles() {
//   loadMoreBtn.disable();
//   newsApiService.fetchArticles().then(articles => {
//     appendArticlesMarkup(articles);
//     loadMoreBtn.enable();
//   });
// }

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

// function clearArticlesContainer() {
//   refs.articlesContainer.innerHTML = '';
// }


