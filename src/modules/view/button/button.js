import createElement from '../../../utils/createElement';
import './button.scss';

function createButton() {
  const btn = createElement('button', 'modal-btn', 'Модальное окно');
  return btn;
}

export default createButton;
