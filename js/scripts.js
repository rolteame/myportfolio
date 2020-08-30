//select hamburger class
const hamburger = document.querySelector('.hamburger');
//select li list items by class
const navList = document.querySelector('.nav-list');
//select div wrapper for list items
const navCollapse = document.querySelector('.navbar-collapse');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  if (hamburger.classList.contains('is-active')) {
    const newHeight = navList.clientHeight + 20;
    navCollapse.style.height = `${newHeight}px`;
  } else {
    navCollapse.style.height = `0`;
  }
});

window.addEventListener('load', (event) => {
  const loaderHolder = document.querySelector('.loader-holder');
  const landing = document.querySelector('.landing');
  if (event.target.readyState === 'complete') {
    setTimeout(function () {
      loaderHolder.style.opacity = '0';
      loaderHolder.style.display = 'none';
      setTimeout(function name(params) {
        landing.style.opacity = '1';
      }, 1000);
    }, 3000);
  }
});