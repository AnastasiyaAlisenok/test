import createButton from './button/button';
import createFormSection from './form-section/form-section';
import { createModal, createOverlay } from './modal/modal';
import './view.scss';

const body = document.querySelector('body');

function addLayout() {
  const header = document.createElement('header');
  const btn = createButton();
  header.append(btn);
  const footer = document.createElement('footer');
  const main = document.createElement('main');
  const formSection = createFormSection();
  const modal = createModal();
  const overlay = createOverlay();
  main.append(formSection, modal, overlay);
  body.append(header, main, footer);
}

export default addLayout;
