const ART_SELECTOR = '.bouquet';
const BUTTON_SELECTOR = '[data-part]';
const PART_CLASS_PREFIX = '.part-';
const OUT_CLASS = 'is-out';

const art = document.querySelector(ART_SELECTOR);

document.querySelectorAll(BUTTON_SELECTOR).forEach((button) => {
  button.addEventListener('click', () => {
    const part = art.querySelector(PART_CLASS_PREFIX + button.dataset.part);
    const isOut = part.classList.toggle(OUT_CLASS);
    button.setAttribute('aria-pressed', String(!isOut));
  });
});
