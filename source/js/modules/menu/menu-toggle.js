const isMenuOpened = 'is-open';
const menuButton = document.querySelector('[data-menu-btn="btn-toggle"]');
const menu = document.querySelector('[data-menu="menu"]');
const overlay = document.querySelector('[data-overlay="overlay"]');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onOverlayClick = (evt) => {
  if (evt.target.closest('[data-overlay="overlay"]')) {
    closeMenu();
  }
};

const onWindowKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    closeMenu();
  }
};

function closeMenu () {
  menuButton.classList.remove(isMenuOpened);
  menu.classList.remove(isMenuOpened);
  overlay.classList.remove(isMenuOpened);
  document.removeEventListener('keydown', onWindowKeyDown);
  overlay.removeEventListener('click', onOverlayClick);
}

function openMenu () {
  menuButton.classList.add(isMenuOpened);
  menu.classList.add(isMenuOpened);
  overlay.classList.add(isMenuOpened);
  document.addEventListener('keydown', onWindowKeyDown);
  overlay.addEventListener('click', onOverlayClick);
}

const onMenuButtonClick = () => {
  if (!menuButton.classList.contains(isMenuOpened)) {
    openMenu();
  } else {
    closeMenu();
  }
};

const menuToggle = () => {
  menuButton.addEventListener('click', onMenuButtonClick);
};

export {menuToggle};
