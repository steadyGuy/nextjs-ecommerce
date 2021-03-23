/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

interface IValidation {
  (name: string, surname: string, email: string, password: string, cfPassword: string): string;
}

const valid: IValidation = (name, surname, email, password, cfPassword) => {
  if (!name || !surname || !email || !password) {
    return 'Пожалуйста, заполните все поля';
  }

  if (!validateEmail(email)) {
    return 'Email не валидный';
  }

  if (password.length < 6) {
    return 'Длина пароля должна быть как минимум 6 символов';
  }

  if (password !== cfPassword) {
    return 'Пароли не совпадают';
  }

  return '';
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default valid;
