import createElement from '../../../utils/createElement';
import './form-section.scss';

function createField(text, type) {
  const container = createElement('div', 'form-field', '');
  const star = createElement('span', 'form-field__star', '*');
  const label = createElement('label', 'form-field__label', text);
  const input = createElement('input', 'form-field__input', '');
  input.type = type;
  label.append(star);
  container.append(label, input);
  return container;
}

function createForm() {
  const form = document.createElement('form');
  form.id = 'form';
  const nameLabel = createField('Имя', 'text');
  const emailLabel = createField('Email', 'email');
  const phoneLabel = createField('Телефон', 'text');
  const textLabel = createElement('label', 'form-field__label', 'Сообщение');
  const star = createElement('span', 'form-field__star', '*');
  textLabel.append(star);
  const textField = createElement('textarea', 'form__text', '');
  textField.rows = '10';
  const formButton = createElement('button', 'form__button', 'Отправить');
  formButton.type = 'submit';
  form.append(
    nameLabel,
    emailLabel,
    phoneLabel,
    textLabel,
    textField,
    formButton,
  );
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
