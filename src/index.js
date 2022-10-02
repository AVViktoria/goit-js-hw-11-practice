//*   IMPORTS  libraries

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Notify } from 'notiflix';

//*   IMPORTS  components  files
import './css/common.css';
import NewsApiService from './js/news-service';
import cardTemplate from './templates/oneCardTemplate.hbs';
import LoadMoreBtn from './js/load-more-btn';

//*     CONSTANTS
const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  spinner: document.querySelector('.spinner-border'),
};
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

async function onSearch(e) {
  e.preventDefault();
  newsApiService.query = e.currentTarget.elements.query.value;
  
  //*  включить кнопку, сбросить страницу очистить контейнер дальше fetch функция
  loadMoreBtn.show();
  newsApiService.resetPage();
  clearHitsContainer();
  fetchHits()

    }
    
  
//*  содержит общий код
//*  при вызове кнопка неактивная, делаем API запрос рисуем и включаем кнопку обратно
function fetchHits() {
  loadMoreBtn.disable();
  newsApiService
    .fetchHits()
    .then(hits => {
      appendHitsMarkup(hits);
      loadMoreBtn.enable();
    })
  }

    // 


// const response =  fetchHits(newsApiService.query);
// console.log(response)
    // currentHits = response.hits.totalHits;

  // if (response.totalHits === '') {
  //   console.log(response.totalHits)
  //   return Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  // }


function onLoadMore() {
  fetchHits()
  }




function appendHitsMarkup(hits) {
  refs.gallery.insertAdjacentHTML('beforeend', cardTemplate(hits));
}
function clearHitsContainer() {
  refs.gallery.innerHTML = '';
}

// function fetchButtonOnLoadMore() {
//   loadMoreBtn.disable();
//   fetchImages(searchQuery)
//     .then(r => {
//       if (r.total === 0) {
//         loadMoreBtn.hide();
//         Notiflix.Notify.warning(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//         return;
//       }
//       if (r.hits.length === 0) {
//         loadMoreBtn.hide();
//         Notiflix.Notify.failure(
//           `We're sorry, but you've reached the end of search results`
//         );
//         return;
//       }
//       renderMarkUp(r);
//       loadMoreBtn.enable();
//     })
//     .catch(err => console.log(err));
// }