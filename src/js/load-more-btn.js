

// async function onClickLoadMoreBtn() {
//   currentPage += 1;
//   const response = await fetchImages(searchQuery, currentPage);
//   renderCardImage(response.hits);
//   lightbox.refresh();
//   currentHits += response.hits.length;

//   if (currentHits === response.totalHits) {
//     refs.loadMoreBtn.classList.add('is-hidden');
//     refs.endCollectionText.classList.remove('is-hidden');
//   }}
 
//   export { onClickLoadMoreBtn };

// export default class LoadMoreBtn {
//   constructor({ selector, hidden = false }) {
//     this.refs = this.getRefs(selector);

//     hidden && this.hide();
//   }

//   getRefs(selector) {
//     const refs = {};
//     refs.button = document.querySelector(selector);
//     refs.label = refs.button.querySelector('.label');
//     refs.spinner = refs.button.querySelector('.spinner');

//     return refs;
//   }

//   enable() {
//     this.refs.button.disabled = false;
//     this.refs.label.textContent = 'Показать ещё';
//     this.refs.spinner.classList.add('is-hidden');
//   }

//   disable() {
//     this.refs.button.disabled = true;
//     this.refs.label.textContent = 'Загружаем...';
//     this.refs.spinner.classList.remove('is-hidden');
//   }

//   show() {
//     this.refs.button.classList.remove('is-hidden');
//   }

//   hide() {
//     this.refs.button.classList.add('is-hidden');
//   }
// }

