import createElement from '../../../utils/createElement';
import './message.scss';

function showMessage(text, classInfo) {
  const form = document.querySelector('#form');
  const msg = createElement('div', 'message', text);
  msg.classList.add(classInfo);
  msg.classList.add('show');
  form.append(msg);
  setInterval(() => {
    msg.remove();
  }, 3000);
}

export default showMessage;
