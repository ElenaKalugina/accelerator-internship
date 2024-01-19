import '../utils/scroll-lock';
import '../utils/focus-lock';
const isMenuOpened = 'is-open';
const menuButton = document.querySelector('[data-nav="btn-toggle"]');
const menu = document.querySelector('[data-nav="menu"]');
const overlay = document.querySelector('[data-overlay="overlay"]');
const nav = document.querySelector('[data-nav="nav"]');

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

const onMenuLinkClick = (evt) => {
  if (evt.target.matches('[data-nav="menu-link"]')) {
    closeMenu();
  }
};

function closeMenu () {
  menuButton.classList.remove(isMenuOpened);
  menu.classList.remove(isMenuOpened);
  overlay.classList.remove(isMenuOpened);
  nav.classList.remove(isMenuOpened);
  document.removeEventListener('keydown', onWindowKeyDown);
  overlay.removeEventListener('click', onOverlayClick);
  nav.removeEventListener('click', onMenuLinkClick);
  window.scrollLock.enableScrolling();
  window.focusLock.unlock();
}

function openMenu () {
  menuButton.classList.add(isMenuOpened);
  menu.classList.add(isMenuOpened);
  overlay.classList.add(isMenuOpened);
  nav.classList.add(isMenuOpened);
  document.addEventListener('keydown', onWindowKeyDown);
  overlay.addEventListener('click', onOverlayClick);
  nav.addEventListener('click', onMenuLinkClick);
  window.scrollLock.disableScrolling();
  window.focusLock.lock('[data-menu="menu"]', false);
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
