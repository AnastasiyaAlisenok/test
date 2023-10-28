import createElement from '../../../utils/createElement';
import './form-section.scss';
import checkValidate, { removeErrors } from '../../validation/validate';

function createField(text, tag, type) {
  const container = createElement('div', 'form-field', '');
  const star = createElement('span', 'form-field__star', '*');
  const label = createElement('label', 'form-field__label', text);
  const input = createElement(tag, 'form-field__input', '');
  input.addEventListener('input', () => {
    removeErrors();
    const formFields = document.querySelectorAll('.form-field__input');
    formFields.forEach((field) => checkValidate(field));
  });
  if (type) input.type = type;
  if (tag === 'textarea') input.rows = '8';
  label.append(star);
  container.append(label, input);
  return container;
}

function createForm() {
  const form = document.createElement('form');
  form.id = 'form';
  const nameLabel = createField('Имя', 'input', 'text');
  const emailLabel = createField('Email', 'input', 'email');
  const phoneLabel = createField('Телефон', 'input', 'tel');
  const msgLabel = createField('Сообщение', 'textarea');
  const formButton = createElement('button', 'form__button', 'Отправить');
  formButton.type = 'button';
  formButton.addEventListener('click', () => {
    const formFields = form.querySelectorAll('.form-field__input');
    removeErrors();
    formFields.forEach((field) => checkValidate(field));
  });
  form.append(nameLabel, emailLabel, phoneLabel, msgLabel, formButton);
  return form;
}

function createFormSection() {
  const formSection = createElement('section', 'form-section', '');
  const sectionTitle = createElement(
    'h1',
    'form-section__title',
    'Форма обратной связи',
  );
  const formContainer = createElement('div', 'form-section__form', '');
  const form = createForm();
  formContainer.append(form);
  formSection.append(sectionTitle, formContainer);
  return formSection;
}

export default createFormSection;
