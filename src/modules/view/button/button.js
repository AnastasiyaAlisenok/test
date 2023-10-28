import createElement from '../../../utils/createElement';
import './button.scss';

function openModal() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('open');
  overlay.classList.add('open');
  document.body.classList.add('scroll');
}

function createButton() {
  const btn = createElement('button', 'modal-btn', 'Модальное окно');
  btn.addEventListener('click', openModal);
  return btn;
}

export default createButton;
