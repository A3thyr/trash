const filters = document.querySelector('.filters');
const filtersButtons = document.querySelectorAll('.filters__button');
const filtersImg = document.querySelector('.filters_img');

filters.addEventListener('click', (event) => {
  const isButton = event.target.tagName === 'BUTTON';
  const isPressed = event.target.getAttribute('aria-pressed') === 'true';

  if (isButton && !isPressed) {
    const filter = event.target.firstElementChild.textContent;

    [...filtersButtons].forEach((button) => {
      button.setAttribute('aria-pressed', 'false');
    });

    filtersImg.style = filter;
    event.target.setAttribute('aria-pressed', 'true');
  }
});
