//*   IMPORTS  libraries

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Notify } from 'notiflix';

//*   IMPORTS  components  files
import './css/common.css';
import cardTemplate from './templates/oneCardTemplate.hbs';
import fetchImages from './js/fetchApi';
// import { onClickLoadMoreBtn } from './js/load-more-btn';

//*     CONSTANTS
const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('[type="text"]'),
  submitBtn: document.querySelector('[type="submit"]'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
  // spinner: document.querySelector('.spinner-border'),
};


function renderCardImage(arr) {
  const markup = arr.map(item => cardTemplate(item)).join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

let lightbox = new SimpleLightbox('.photo-card a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

let currentPage = 1;
let searchQuery = '';
let currentHits = 0;

refs.searchForm.addEventListener('submit', onSearch);


// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });
// const newsApiService = new NewsApiService();



async function onSearch(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.searchQuery.value;
  currentPage = 1;

  // newsApiService.query = e.currentTarget.elements.query.value;
 
  if (searchQuery === '') {
    return Notiflix.Notify.failure("Sorry, you didn't write anything");
  }
  const response = await fetchImages(searchQuery, currentPage);
  currentHits = response.hits.length;

  if (response.totalHits > 40) {
    refs.loadMoreBtn.classList.remove('is-hidden');
  } else {
    refs.loadMoreBtn.classList.add('is-hidden');
  }

  try {
    if (response.totalHits > 0) {
      Notify.success(`Hooray! We found ${response.totalHits} images.`);
      refs.gallery.innerHTML = '';
      renderCardImage(response.hits);
      lightbox.refresh();
      endCollectionText.classList.add('is-hidden');

      const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * -100,
        behavior: 'smooth',
      });
    }

    if (response.totalHits === 0) {
      refs.gallery.innerHTML = '';
      Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.endCollectionText.classList.add('is-hidden');
    }
  } catch (error) {
    console.log(error);
  }

  refs.loadMoreBtn.addEventListener('click', onClickLoadMoreBtn);
  async function onClickLoadMoreBtn() {
    currentPage += 1;
    const response = await fetchImages(searchQuery, currentPage);
    renderCardImage(response.hits);
    lightbox.refresh();
    currentHits += response.hits.length;
  
    if (currentHits === response.totalHits) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.endCollectionText.classList.remove('is-hidden');
    }}
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

