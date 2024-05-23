/* в этот файл добавляет скрипты*/
document.getElementById('toggle').onclick = openMenu;

function openMenu() {
  this.parentNode.classList.toggle('main-nav--open');
  document.body.classList.toggle('page__body--open');
}
