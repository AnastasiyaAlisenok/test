import IMask from 'imask';
import createElement from '../../utils/createElement';

const EMAIL_RGX =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

function chechEmail(emailValue) {
  return EMAIL_RGX.test(emailValue);
}

export function removeErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach((error) => {
    error.remove();
  });
  const validateFields = document.querySelectorAll('.form-field__input');
  validateFields.forEach((field) => {
    field.classList.remove('input-error');
  });
}

function createError(element, text, classInfo) {
  const error = createElement('div', 'error', text);
  element.classList.add(classInfo);
  element.parentElement.after(error);
}

function checkPhone(element) {
  const phoneMask = new IMask(element, {
    mask: '+{375}(00)000-00-00',
    lazy: false,
  });
  if (!phoneMask.masked.isComplete) {
    return true;
  }
  return false;
}

function checkValidate(element) {
  const textLength = element.value.length;
  if (textLength === 0) {
    createError(element, 'Поле обязательно к заполнению', 'input-error');
  } else if (element.type === 'email') {
    const isValid = chechEmail(element.value);
    if (!isValid) {
      createError(element, 'Некорректный email', 'input-error');
    }
  } else if (element.type === 'tel') {
    const isValid = checkPhone(element);
    if (isValid) {
      createError(element, 'Некорректный номер телефона', 'input-error');
    }
  }
}

export default checkValidate;
