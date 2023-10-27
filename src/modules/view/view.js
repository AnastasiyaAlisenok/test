import createFormSection from './form-section/form-section';
import './view.scss';

const body = document.querySelector('body');

function addLayout() {
  const header = document.createElement('header');
  const footer = document.createElement('footer');
  const main = document.createElement('main');
  const formSection = createFormSection();
  main.append(formSection);
  body.append(header, main, footer);
}

export default addLayout;
