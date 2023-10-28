import createElement from '../../../utils/createElement';
import './modal.scss';

const text =
  'Здравствуйте. Меня зовут Анастасия. Рада была выполнить Ваше тестовое задание!';

function createModal() {
  const modal = createElement('div', 'modal', text);
  return modal;
}

function createOverlay() {
  const overlay = createElement('div', 'overlay', '');
  overlay.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('open');
    overlay.classList.remove('open');
    document.body.classList.remove('scroll');
  });
  return overlay;
}

export { createModal, createOverlay };
