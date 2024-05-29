/* в этот файл добавляет скрипты*/
document.querySelector('.page__body').classList.remove('no-js');

document.getElementById('toggle').onclick = openMenu;

function openMenu() {
  this.parentNode.classList.toggle('main-nav--open');
  document.body.classList.toggle('page__body--open');
}

const heroWrapper = document.getElementsByClassName('hero__wrapper')[0];
const heightWrapper = document.querySelector('.hero').offsetHeight;
const heightHeader = document.querySelector('.main-header').offsetHeight;
const resultHeight = heightHeader + heightWrapper - 10;
heroWrapper.style.setProperty('--height-before',`${resultHeight}px`);
