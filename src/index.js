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
// import { onClickLoadMoreBtn } from './js/load-more-btn';

//*     CONSTANTS
const refs = {
  searchForm: document.querySelector('.search-form'),
  // loadMoreBtn: document.querySelector('.load-more'),
  // searchInput: document.querySelector('[type="text"]'),
  // submitBtn: document.querySelector('[type="submit"]'),
  gallery: document.querySelector('.gallery'),
  spinner: document.querySelector('.spinner-border'),
};
 const loadMoreBtn = new LoadMoreBtn({ 
  selector: '[data-action="load-more"]',
   hidden: true, 
});
 const newsApiService = new NewsApiService();
console.log(loadMoreBtn);

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchHits);

function onSearch(e) {
  e.preventDefault();
 
  newsApiService.query = e.currentTarget.elements.query.value;
  // newsApiService.query = e.currentTarget.query.value;
if(newsApiService.query===''){
  return alert("Please, enter the name of the animal");
  // return Notiflix.Notify.failure("Sorry, you didn't write anything");
}

//*  включить кнопку, сбросить страницу очистить контейнер дальше fetch функция
loadMoreBtn.show();
newsApiService.resetPage();
clearHitsContainer(); 
fetchHits()
}


//*  содержит общий код
//*  при вызове кнопка неактивная, делаем API запрос рисуем и включаем кнопку обратно
function fetchHits(){
  loadMoreBtn.disable();
  newsApiService.fetchHits().then(hits => {
    appendHitsMarkup(hits);
    loadMoreBtn.enable();
});
};

function appendHitsMarkup(hits) {
  refs.gallery.insertAdjacentHTML('beforeend', cardTemplate(hits));
}


function clearHitsContainer() {
  refs.gallery.innerHTML = '';
}

