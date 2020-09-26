const ADMIN_PASSWORD = 'jqueryismyjam';
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;
const userPassword = prompt('Введите пароль!');

if (ADMIN_PASSWORD === userPassword) {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else if (ADMIN_PASSWORD !== userPassword) {
  message = ACCESS_DENIED;
}

console.log(message);

console.log(message);
alert(message);
