import IMask from 'imask';
import showMessage from '../view/message/message';

const URL = `http://localhost:9090/api/registration`;

const registrateMsg = async (userName, userEmail, userPhone, msg) => {
  const response = await fetch(URL, {
    method: 'Post',
    body: {
      name: userName,
      email: userEmail,
      phone: userPhone,
      text: msg,
    },
  });
  return response.json();
};

export default registrateMsg;

function resetFields() {
  const formFields = document.querySelectorAll('.form-field__input');
  formFields.forEach((field) => {
    if (field.type === 'tel') {
      const phoneMask = new IMask(field, {
        mask: '+{375}(00)000-00-00',
        lazy: false,
      });
      phoneMask.value = '';
    } else {
      field.value = '';
    }
  });
}

export function sendRequest() {
  const formFields = document.querySelectorAll('.form-field__input');
  const errors = document.querySelectorAll('.error');
  if (errors && errors.length === 0) {
    const arrValue = [];
    formFields.forEach((field) => arrValue.push(field.value));
    registrateMsg(arrValue[0], arrValue[1], arrValue[2], arrValue[3])
      .then((resp) => {
        if (resp.status === 'success') {
          resetFields();
          showMessage(resp.message, 'success');
        }
        if (resp.status === 'error') {
          showMessage(resp.message, 'error');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
